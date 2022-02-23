import styled from '@emotion/styled';
import { Typography } from '@material-ui/core';

export const RegisterDescriptonText = styled(Typography)`
  margin-top: ${({ theme }) => theme.spacing(1)}px;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
`;
