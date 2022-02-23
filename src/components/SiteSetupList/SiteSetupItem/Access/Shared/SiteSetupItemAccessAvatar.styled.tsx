import { Avatar, Typography, AvatarProps, Box } from '@material-ui/core';
import styled from '@emotion/styled';

interface SiteSetupItemAccessManagermentAvatarProps {
  size?: 'small' | 'default';
}

export const SiteSetupItemAccessManagermentAvatar = styled(Avatar)<SiteSetupItemAccessManagermentAvatarProps & AvatarProps>`
  height: ${({ theme, size }) => (size === 'small' ? theme.spacing(5) : theme.spacing(7))}px;
  width: ${({ theme, size }) => (size === 'small' ? theme.spacing(5) : theme.spacing(7))}px;
`;

export const SiteSetupItemAccessManagermentName = styled(Typography)`
  word-break: break-all;
`;

export const SiteSetupItemAccessManagermentContainer = styled(Box)`
  cursor: pointer;
`;
