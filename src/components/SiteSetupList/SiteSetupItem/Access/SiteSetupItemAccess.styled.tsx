import WButton from '@components/Controls/WButton';
import styled from '@emotion/styled';
import { Box } from '@material-ui/core';

export const UserManagermentAddBtn = styled(WButton)`
  height: ${({ theme }) => theme.spacing(7)}px;
  width: ${({ theme }) => theme.spacing(7)}px;
  padding: 0;
  min-width: auto;
`;

export const SiteSetupModalAvatarManagerList = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing(3)}px;
`;
