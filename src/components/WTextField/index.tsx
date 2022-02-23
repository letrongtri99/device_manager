import React, { useMemo } from 'react';
import { StyledWTextField, StyledWTextFieldLabel } from './WTextField.styled';
import { TextFieldProps } from '@material-ui/core';

interface WTextFieldProps {
  label: string;
  labelWidth?: number;
}

const WTextField = ({ label, labelWidth, ...props }: WTextFieldProps & Omit<TextFieldProps, 'variant' | 'size'>) => {
  const randomId = useMemo(() => Math.random().toString(36).substring(7), []);
  return (
    <StyledWTextField
      {...props}
      id={'w-' + randomId}
      variant="outlined"
      InputProps={{
        startAdornment: (
          <StyledWTextFieldLabel labelWidth={labelWidth} htmlFor={'w-' + randomId}>
            {label}
          </StyledWTextFieldLabel>
        ),
      }}
    />
  );
};

export default WTextField;
