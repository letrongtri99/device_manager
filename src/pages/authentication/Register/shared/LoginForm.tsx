import WButton from '@components/Controls/WButton';
import { Box, Typography } from '@material-ui/core';
import { selectAuth } from '@stores/selectors/auth';
import { AuthStatus } from '@stores/shared/types/AuthStatus';
import { RequestStatus } from '@stores/shared/types/RequestStatus';
import { authActions } from '@stores/slices/auth';
import { isValidPhoneNumber, PhoneNumber } from 'libphonenumber-js';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import PhoneInput from '../components/PhoneInput';
import { RecaptchaBox } from './LoginForm.styled';
export interface LoginFormProps {
  onLoginSuccess?: (phoneNumber: PhoneNumber) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLoginSuccess }) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const recaptcha = useRef<HTMLDivElement>(null);
  const phoneInputRef = useRef<HTMLInputElement | null>(null);

  const { status, authStatus } = useSelector(selectAuth);

  const [phoneNumber, setPhoneNumber] = useState<PhoneNumber>();
  const [clickable, setClickable] = useState<boolean>(true);

  const isPhoneNumberValid = useMemo(() => isValidPhoneNumber(String(phoneNumber?.number) || ''), [phoneNumber]);
  const shouldShowStartIcon = useMemo(() => status === RequestStatus.Loading || !clickable, [status, clickable]);
  const shouldDisableNextButton = useMemo(() => !clickable || !isValidPhoneNumber(String(phoneNumber?.number) || '') || status === RequestStatus.Loading, [phoneNumber, status, clickable]);

  const onPhoneNumberChange = (phoneNumberText: string, phoneNumber?: PhoneNumber) => {
    setPhoneNumber(phoneNumber);
  };

  const onSubmitButtonClicked = () => {
    if (phoneNumber && recaptcha.current) {
      setClickable(false);
      recaptcha.current.innerHTML = '';
      const node = document.createElement('div');
      node.setAttribute('id', 'login-form-recaptcha');
      recaptcha.current.appendChild(node);
      dispatch(authActions.firebaseLoginByPhoneNumberSubmit(phoneNumber.number.toString()));

      const timer = setTimeout(() => {
        setClickable(true);
      }, 3000);

      return () => {
        clearTimeout(timer);
      };
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isPhoneNumberValid) {
        phoneInputRef.current?.blur();
      }
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [phoneNumber]);

  useEffect(() => {
    if (status === RequestStatus.Success && authStatus === AuthStatus.VerifyingCode) {
      if (phoneNumber) {
        onLoginSuccess?.(phoneNumber);
      }
    }

    if (status !== RequestStatus.Loading) {
      setClickable(true);
    }
  }, [status, authStatus]);

  const onChangeInput = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if ((e.keyCode === 13 || e.code === 'Enter') && status !== RequestStatus.Loading) {
      onSubmitButtonClicked();
    }
  };

  return (
    <>
      <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
        <Box textAlign="center">
          <Typography variant="subtitle1">
            {intl.formatMessage({
              id: 'login_page_title',
              defaultMessage: 'Register with your mobile number',
            })}
          </Typography>
          <Typography variant="caption">
            {intl.formatMessage({
              id: 'login_page_description',
            })}
          </Typography>
          <Box pt={4}>
            <PhoneInput
              helperText={
                status === RequestStatus.Failed &&
                intl.formatMessage({
                  id: 'login_failed_error',
                  defaultMessage: 'Shucks! something went wrongs',
                })
              }
              error={status === RequestStatus.Failed}
              inputRef={phoneInputRef}
              disabled={status === RequestStatus.Loading}
              onPhoneNumberChange={onPhoneNumberChange}
              onKeyDown={onChangeInput}
            />
          </Box>
        </Box>
        <Box textAlign="right" mx={-2}>
          <WButton loading={shouldShowStartIcon} disabled={shouldDisableNextButton} variant="text" onClick={onSubmitButtonClicked} showShortLineBottom>
            {intl.formatMessage({ id: 'next', defaultMessage: 'Next' })}
          </WButton>
        </Box>
      </Box>
      <RecaptchaBox ref={recaptcha} />
    </>
  );
};

export default LoginForm;
