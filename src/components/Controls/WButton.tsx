import { Button, ButtonProps, CircularProgress } from '@material-ui/core';
import React from 'react';
import { WButtonShortLineBottom } from './WButton.styled';

export interface WButtonProps extends ButtonProps {
  showShortLineBottom?: boolean;
  component?: string;
  loading?: boolean;
}

const WButton = ({ showShortLineBottom, loading, children, ...props }: WButtonProps) => {
  if (showShortLineBottom) {
    return (
      <WButtonShortLineBottom {...props} disabled={props.disabled || loading} loading={loading} disableRipple variant="text">
        {children}
      </WButtonShortLineBottom>
    );
  }
  return (
    <Button startIcon={loading && <CircularProgress size={20} />} {...props} disabled={props.disabled || loading}>
      {children}
    </Button>
  );
};

export default WButton;
