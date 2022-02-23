import styled from '@emotion/styled';
import { Box, TextField, Typography } from '@material-ui/core';

export const InputLabelFixed = styled(Box)`
  color: ${({ theme }) => theme.palette.gray[100]};
`;

export const TextFieldStyled = styled(TextField)<{ mr?: number; w?: number }>`
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;

  ${({ mr }) => mr && `margin-right: ${mr}px`};

  ${({ w }) => w && `width: ${w}%`}
`;

export const RegisterDescriptonText = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`;
