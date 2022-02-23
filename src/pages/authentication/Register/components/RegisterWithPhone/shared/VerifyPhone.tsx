import { Box, Typography } from '@material-ui/core';
import { RegisterStatus } from '@pages/authentication/Register';
import PinCodeInput from '@pages/OTP/components/PinCodeInput';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { RegisterDescriptonText } from './Common.styled';

export interface VerifyPhoneProps {
  setStep?: (step: number) => void;
}

const VerifyPhone = ({ setStep }: VerifyPhoneProps) => {
  const intl = useIntl();
  const [error, setErorr] = useState<boolean>(false);

  const handleOTPCodeFullFill = (code: string) => {
    setErorr(false);
    setTimeout(() => !error && setStep?.(RegisterStatus.EnterInfomationProfile), 3000);
  };

  return (
    <>
      <Box display="flex" flexDirection="column" width="80%" margin="auto">
        <Typography variant="h2" align="center">
          {intl.formatMessage({ id: 'register', defaultMessage: 'Register' })}
        </Typography>
        <RegisterDescriptonText variant="caption" align="center">
          {intl.formatMessage({ id: 'register_with_phone_number_verify_description', defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' })}
        </RegisterDescriptonText>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" mt={2}>
          <PinCodeInput pinCodeLength={6} hasError={error} message="Message" onFullFill={handleOTPCodeFullFill} />
        </Box>
      </Box>
      <Box flexGrow={1} display="flex" alignItems="flex-end" />
    </>
  );
};

export default VerifyPhone;
