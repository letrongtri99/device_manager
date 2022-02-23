import OnboardingLayout from '@components/layouts/OnboardingLayout';
import { WattAppState } from '@stores/index';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import LoginForm from './shared/LoginForm';

export enum RegisterStatus {
  SelectCompany = 1,
  EnterInfomationCompany,
  RegisterWithPhoneNumber,
  EnterInfomationProfile,
}
const RegisterPage = () => {
  const history = useHistory();

  const { isReadTerm } = useSelector((state: WattAppState) => state.common);

  const onLoginSuccess = () => {
    history.push('/verify-otp');
  };

  const [step, setStep] = React.useState<number>(RegisterStatus.SelectCompany);

  return !isReadTerm
    ? (
    <Redirect to="/terms-and-conditions" />
      )
    : (
    <OnboardingLayout stepProps={{ numberOfSteps: 2, step: step }}>
      <LoginForm onLoginSuccess={onLoginSuccess} />
    </OnboardingLayout>
      );
};

export { RegisterPage };
