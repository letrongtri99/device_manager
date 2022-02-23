import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import PhoneInput from '../../PhoneInput/PhoneInput';
import { useIntl } from 'react-intl';
import { PhoneNumber } from 'libphonenumber-js';
import { RegisterDescriptonText } from './Common.styled';
import { RegisterWithPhoneNumberStep } from '@pages/authentication/Register/components/RegisterWithPhone/RegisterWithPhone';
import { RegisterStatus } from '@pages/authentication/Register';

export interface RegisterPhoneProps {
  setRegisterPhoneNumberStep?: (step: number) => void;
  setStep?: (step: number) => void;
}

const RegisterPhone = ({ setRegisterPhoneNumberStep, setStep }: RegisterPhoneProps) => {
  const intl = useIntl();

  const [isPhoneValid, setPhoneValid] = useState<boolean>(false);
  const [phoneText, setPhoneText] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState<PhoneNumber>();

  const handleNumberChange = (text: string, phoneNumber?: PhoneNumber) => {
    setPhoneText(text);
    setPhoneNumber(phoneNumber);
  };

  useEffect(() => {
    setPhoneValid(!!phoneText && !!phoneNumber);
  }, [phoneText, phoneNumber]);

  return (
    <>
      <Box display="flex" flexDirection="column" width="80%" margin="auto">
        <Typography variant="h2" align="center">
          {intl.formatMessage({ id: 'register_with_phone_number_title', defaultMessage: 'Register with your mobile number' })}
        </Typography>
        <RegisterDescriptonText variant="caption" align="center">
          {intl.formatMessage({ id: 'register_with_phone_number_description', defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' })}
        </RegisterDescriptonText>
        <Box display="flex" justifyContent="center" mt={2}>
          <PhoneInput onPhoneNumberChange={handleNumberChange} />
        </Box>
      </Box>
      <Box flexGrow={1} display="flex" alignItems="flex-end">
        <Box display="flex" width="60%" marginLeft="auto" marginRight="auto" justifyContent="space-between">
          <Button
            variant="text"
            onClick={() => {
              setStep?.(RegisterStatus.EnterInfomationCompany);
            }}
          >
            {intl.formatMessage({ id: 'back', defaultMessage: 'Back' })}
          </Button>
          <Button variant="text" onClick={() => setRegisterPhoneNumberStep?.(RegisterWithPhoneNumberStep.EnterVerifyCode)} disabled={!isPhoneValid}>
            {intl.formatMessage({ id: 'next', defaultMessage: 'Next' })}
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default RegisterPhone;
