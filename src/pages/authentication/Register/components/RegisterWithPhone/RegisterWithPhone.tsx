import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import RegisterPhone from './shared/RegisterPhone';
import VerifyPhone from './shared/VerifyPhone';

export interface RegisterWithPhoneProps {
  setStep: (step: number) => void;
}
export enum RegisterWithPhoneNumberStep {
  EnterPhoneNumber = 1,
  EnterVerifyCode,
}
const RegisterWithPhone = ({ setStep }: RegisterWithPhoneProps) => {
  const [registerPhoneNumberStep, setRegisterPhoneNumberStep] = useState<number>(RegisterWithPhoneNumberStep.EnterPhoneNumber);

  return (
    <Box display="flex" flexDirection="column" height="100%" width="100%">
      {registerPhoneNumberStep === RegisterWithPhoneNumberStep.EnterPhoneNumber && <RegisterPhone setRegisterPhoneNumberStep={setRegisterPhoneNumberStep} setStep={setStep} />}
      {registerPhoneNumberStep === RegisterWithPhoneNumberStep.EnterVerifyCode && <VerifyPhone setStep={setStep} />}
    </Box>
  );
};
export default RegisterWithPhone;
