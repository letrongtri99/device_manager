import Avatar from '@components/Avatar';
import styled from '@emotion/styled';
import { Box, IconButton, Typography } from '@material-ui/core';

export const HeaderAvatar = styled(Avatar)`
  height: ${({ theme }) => theme.spacing(10)}px;
  width: ${({ theme }) => theme.spacing(10)}px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.palette.common.white};
  cursor: pointer;
`;

export const IconButtonNotification = styled(IconButton)`
  background: ${({ theme }) => theme.palette.common.white};
  box-shadow: '2px 2px 5px #ccc';
`;

export const RoleType = styled(Box)`
  font-size: ${({ theme }) => theme.spacing(11 / 8)}px;
  color: ${({ theme }) => theme.palette.common.white};
  background-color: ${({ theme }) => theme.palette.secondary.main};
  border-radius: ${({ theme }) => theme.spacing(2)}px;
  padding: 0 ${({ theme }) => theme.spacing(1)}px;
  margin-left: ${({ theme }) => theme.spacing(2)}px;
`;

export const MessageWrapper = styled(Box)`
  background: ${({ theme }) => `linear-gradient(-90deg, ${theme.palette.blue[200]} 0%, ${theme.palette.blue[100]} 100%)`};
  box-shadow: 0px 8px 22px 0px rgba(89, 202, 197, 0.38);
`;

export const MessageText = styled(Typography)`
  color: ${({ theme }) => theme.palette.common.white};
`;
