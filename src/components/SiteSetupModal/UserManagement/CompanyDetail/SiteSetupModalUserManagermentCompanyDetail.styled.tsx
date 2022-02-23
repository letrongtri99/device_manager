import styled from '@emotion/styled';
import { Box } from '@material-ui/core';

export const SiteSetupModalUserManagermentCompanyDetailContainer = styled(Box)`
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.09);
  border-radius: ${({ theme }) => theme.spacing(3.5)}px;
  background-color: ${({ theme }) => theme.palette.common.white};
  padding: ${({ theme }) => theme.spacing(3)}px;
`;

export const SiteSetupModalUserManagermentCompanyUserList = styled(Box)`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)}px;
`;
