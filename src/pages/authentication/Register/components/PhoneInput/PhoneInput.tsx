import { Box, InputAdornment, StandardTextFieldProps } from '@material-ui/core';
import parsePhoneNumber, { PhoneNumber } from 'libphonenumber-js';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { defaultCountryCode } from './countryCodes';
import { PhoneNumberInput, PhoneNumberInputLabel, TextFieldAutocomplete } from './PhoneInput.styled';
import { enforceFormat, formatToPhone } from './utils';

export interface PhoneInputProps {
  disabled?: boolean;
  onPhoneNumberChange?: (text: string, phoneNumber?: PhoneNumber) => void;
}

const PhoneInput: React.FC<Omit<StandardTextFieldProps, 'onChange' | 'value' | 'size' | 'variant'> & PhoneInputProps> = ({ disabled, onPhoneNumberChange, ...rest }) => {
  const intl = useIntl();

  const [countryCode, setCountryCode] = useState<string>(defaultCountryCode);
  const [phoneNumber, setPhoneNumber] = useState<string>();

  useEffect(() => {
    const phoneNumberText = `${countryCode}${phoneNumber?.replace(/ /g, '')}`;
    const validPhoneNumber = parsePhoneNumber(phoneNumberText);
    onPhoneNumberChange?.(phoneNumberText, validPhoneNumber);
  }, [countryCode, phoneNumber]);

  return (
    <>
      <Box mr={1} display="inline-block">
        <TextFieldAutocomplete
          error={rest.error}
          disabled={disabled}
          size="small"
          variant="outlined"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
        />
      </Box>
      <PhoneNumberInput
        {...rest}
        size="small"
        variant="outlined"
        value={phoneNumber}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PhoneNumberInputLabel variant="body2">
                {intl.formatMessage({
                  id: 'input_placeholder_mobile_number',
                  defaultMessage: 'Mobile number',
                })}
              </PhoneNumberInputLabel>
            </InputAdornment>
          ),
        }}
        onChange={(e) => setPhoneNumber(e.target.value)}
        onKeyDown={(e) => {
          enforceFormat(e);
          rest.onKeyDown?.(e);
        }}
        onKeyUp={(e) => {
          formatToPhone(e);
          rest?.onKeyUp?.(e);
        }}
      />
    </>
  );
};

export default PhoneInput;
