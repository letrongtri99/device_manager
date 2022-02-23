import styled from '@emotion/styled';
import { TextField, Typography } from '@material-ui/core';

export const CodeNumber = styled(TextField)`
  justify-content: center;
  margin: 0 ${({ theme }) => theme.spacing(1)}px;
  text-align: center;
  .MuiInputBase-root {
    width: 55px;
    height: 47px;
    &:hover {
      fieldset {
        border-color: rgba(0, 0, 0, 0.23);
      }
    }
    fieldset {
      border-radius: 999px;
    }
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const ErrorMessage = styled(Typography)`
  color: red;
`;
