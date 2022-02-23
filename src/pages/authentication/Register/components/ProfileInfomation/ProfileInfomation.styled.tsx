import { Typography, TextField, Box } from '@material-ui/core';
import styled from '@emotion/styled';

export const RegisterDescriptonText = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
`;

export const TextFieldStyled = styled(TextField)<{ mr?: number; w?: number }>`
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;

  ${({ mr }) => mr && `margin-right: ${mr}px`};

  ${({ w }) => w && `width: ${w}%`}
`;

export const InputLabelFixed = styled(Box)`
  color: ${({ theme }) => theme.palette.gray[100]};
`;
