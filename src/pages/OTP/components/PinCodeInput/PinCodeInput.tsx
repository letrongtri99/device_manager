import CheckIcon from '@assets/vectors/check.svg';
import { Box } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import { CodeNumber, ErrorMessage } from './PinCodeInput.styled';

interface PinCodeInputProps {
  pinCodeLength: number;
  hasError?: boolean;
  message?: string;
  onChange?: (code: string) => void;
  onFullFill?: (code: string) => void;
  isSuccess?: boolean;
}

const PinCodeInput: React.FC<PinCodeInputProps> = ({
  pinCodeLength,
  hasError,
  message,
  onChange,
  onFullFill,
  isSuccess
}) => {
  const codeNumberRefs: Array<HTMLInputElement | null> = Array(
    pinCodeLength
  ).fill(null);

  const code = useRef<string[]>(Array(pinCodeLength).fill(undefined));

  const onCodeNumberChange = (value: string, index: number) => {
    const valueIsNumber = '0123456789'.includes(value);

    if (!valueIsNumber) {
      codeNumberRefs[index]!.value = '';
      return;
    }

    codeNumberRefs[index]!.value = value[value.length - 1] || '';
    code.current[index] = value[value.length - 1];

    const pinCode = code.current.join('');

    onChange?.(pinCode);

    if (pinCode.length === pinCodeLength) {
      onFullFill?.(pinCode);
    }

    if (value?.length === 1) {
      if (
        codeNumberRefs[index + 1] &&
        codeNumberRefs[index + 1]!.value === ''
      ) {
        const nextInput = codeNumberRefs[index + 1];
        nextInput?.focus();
      }
      return;
    }
  };

  const showKey = (e: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (e.code === 'Delete') {
      const prevInput = codeNumberRefs[index - 1];
      prevInput?.focus();
    } else if (e.code === 'Backspace' && codeNumberRefs[index]!.value === '') {
      const prevInput = codeNumberRefs[index - 1];
      prevInput?.focus();
    } else if (
      codeNumberRefs[index]!.value &&
      e.code !== 'Delete' &&
      e.code !== 'Backspace'
    ) {
      const nextInput = codeNumberRefs[index + 1];
      nextInput?.focus();
    }
  };

  useEffect(() => {
    codeNumberRefs[0]?.focus();
  }, []);

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" mb={5}>
        {new Array(pinCodeLength).fill(1).map((v, i) => (
          <CodeNumber
            type="text"
            inputRef={(ref) => {
              codeNumberRefs[i] = ref;
            }}
            key={v + i}
            inputProps={{
              maxLength: 1,
              style: {
                textAlign: 'center'
              }
            }}
            variant="outlined"
            onChange={(e) => {
              onCodeNumberChange(e.target.value, i);
            }}
            error={hasError}
            onKeyDown={(e) => {
              showKey(e, i);
            }}
          />
        ))}
      </Box>
      {hasError && <ErrorMessage variant="caption">{message}</ErrorMessage>}
      {!hasError && isSuccess && (
        <ErrorMessage>
          <CheckIcon />
        </ErrorMessage>
      )}
    </>
  );
};

export default PinCodeInput;
