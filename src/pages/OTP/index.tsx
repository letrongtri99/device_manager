import SendToMobileIcon from '@assets/vectors/send_to_mobile.svg';
import OnboardingLayout from '@components/layouts/OnboardingLayout';
import { Box, Button, Typography } from '@material-ui/core';
import { WattAppState } from '@stores/index';
import { RequestStatus } from '@stores/shared/types/RequestStatus';
import { authActions } from '@stores/slices/auth';
import React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import PinCodeInput from './components/PinCodeInput';

const OTPPage = () => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const otpStatus = useSelector((state: WattAppState) => state.auth.otpStatus);

  const onFulfill = (code: string) => {
    dispatch(authActions.firebaseVerifyCodeRequest(code));
  };

  return (
    <OnboardingLayout stepProps={{ numberOfSteps: 2, step: 1 }}>
      <Box display="flex" flexDirection="column" textAlign="center" justifyContent="space-between" height="100%">
        <Box>
          <Box>
            <Typography variant="subtitle1">
              {intl.formatMessage({
                id: 'registration',
                defaultMessage: 'Registration',
              })}
            </Typography>
          </Box>
          <Box>
            <Typography variant="caption">{intl.formatMessage({ id: 'verify_otp_description' })}</Typography>
          </Box>
          <Box mt={8}>
            <PinCodeInput
              pinCodeLength={6}
              onChange={(code) => console.log(code)}
              onFullFill={onFulfill}
              hasError={otpStatus === RequestStatus.Failed}
              isSuccess={otpStatus === RequestStatus.Success}
              message={intl.formatMessage({
                id: 'error_message_invalid_otp_code',
                defaultMessage: 'This code is invalid. Please try again.',
              })}
            />
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" alignItems="center" mt={10}>
          <SendToMobileIcon />
          <Button variant="text">
            {intl.formatMessage({
              id: 'resend_otp_code',
              defaultMessage: 'Send code again',
            })}
          </Button>
        </Box>
      </Box>
    </OnboardingLayout>
  );
};

export default OTPPage;
