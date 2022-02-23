import styled from '@emotion/styled';
import { Box, Popper, TextField, Typography } from '@material-ui/core';

export const InputLabelFixed = styled(Box)`
  color: ${({ theme }) => theme.palette.gray[100]};
`;

export const TextFieldAutocomplete = styled(TextField)`
  width: ${({ theme }) => theme.spacing(9)}px !important;
  .MuiInputBase-root {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }
  .MuiInputBase-input {
    text-align: center;
  }
`;

export const PhoneNumberInput = styled(TextField)`
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  .MuiFormHelperText-root {
    text-align: right;
    margin: ${({ theme }) => `${theme.spacing(2)}px 0 0 0`};
  }
`;

export const PhoneNumberInputLabel = styled(Typography)`
  color: ${({ theme }) => theme.palette.grey[500]};
`;

export const PhoneInputPopper = styled(Popper)`
  width: ${({ theme }) => theme.spacing(32)}px !important;
`;
