import styled from '@emotion/styled';
import { Box } from '@material-ui/core';

export const LayoutBackground = styled(Box)`
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const MainCard = styled(Box)`
  background: ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.spacing()}px;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.12);
  padding: 20px;
`;
