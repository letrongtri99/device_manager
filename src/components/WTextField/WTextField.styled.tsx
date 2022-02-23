import styled from '@emotion/styled';
import { TextField, TextFieldProps, Theme } from '@material-ui/core';

export const StyledWTextField = styled(TextField)(({ disabled, theme }: Omit<TextFieldProps, 'variant'> & { theme?: Theme }) => ({
  padding: 0,
  '.MuiOutlinedInput-adornedStart': {
    paddingLeft: 0,
  },
  input: {
    padding: 0,
    height: '38px',
    border: 'none',
    outline: 'none',
    width: '100%',
    fontSize: '16px',
    color: disabled ? theme?.palette.black[400] : theme?.palette.black[100],
    '&:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0px 1000px white inset',
    },
  },
}));

export const StyledWTextFieldLabel = styled.label(({ labelWidth, theme }: { labelWidth?: number } & { theme?: Theme }) => ({
  color: `${theme?.palette.white[100]}`,
  paddingLeft: `${theme?.spacing(3.125)}px`,
  width: theme?.spacing(labelWidth || 16) + 'px',
  display: 'flex',
  alignItems: 'center',
  fontSize: theme?.spacing(14 / 8) + 'px',
}));
