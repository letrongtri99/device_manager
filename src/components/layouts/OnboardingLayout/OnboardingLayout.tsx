import React from 'react';
import { Box, Container } from '@material-ui/core';
import WattLogo from '@assets/vectors/logo.svg';
import { MainCard, LayoutBackground } from './OnboardingLayout.styled';
import ProcessStep, { ProcessStepProps } from './components/ProcessStep';

interface OnboardingLayoutProps {
  children?: React.ReactNode;
  stepProps?: ProcessStepProps;
}

const OnboardingLayout = ({ children, stepProps }: OnboardingLayoutProps) => {
  return (
    <LayoutBackground>
      <Container fixed>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100%" pb={8}>
          <Box my={8}>
            <WattLogo />
          </Box>
          <MainCard height={600} width={740}>
            {stepProps && <ProcessStep {...stepProps} />}
            <Box height="100%" display="flex" alignContent="center" justifyContent="center" alignItems="center" justifyItems="center" pt={12} pb={12}>
              {children}
            </Box>
          </MainCard>
        </Box>
      </Container>
    </LayoutBackground>
  );
};

export default OnboardingLayout;
