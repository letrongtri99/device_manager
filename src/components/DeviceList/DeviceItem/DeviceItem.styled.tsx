import styled from '@emotion/styled';
import { Avatar, Box } from '@material-ui/core';

interface DeviceItemContainerProps {
  active?: boolean;
}

export const DeviceItemContainer = styled(Box)<DeviceItemContainerProps>`
  padding: ${({ theme }) => `${theme.spacing(2)}px ${theme.spacing(3)}px`};
  background-color: ${({ theme, active }) => (active ? theme.palette.grey[200] : theme.palette.common.white)};
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[200]};
  }
`;

export const DeviceItemAvatar = styled(Avatar)`
  height: ${({ theme }) => theme.spacing(6)}px;
  width: ${({ theme }) => theme.spacing(6)}px;
  margin-right: ${({ theme }) => theme.spacing(2)}px;
`;
