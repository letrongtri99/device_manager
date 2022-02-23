import { Avatar, Typography, AvatarProps, Box } from '@material-ui/core';
import styled from '@emotion/styled';

interface SiteSetupModalUserManagermentAvatarProps {
  size?: 'small' | 'default';
}

export const SiteSetupModalUserManagermentAvatar = styled(Avatar)<SiteSetupModalUserManagermentAvatarProps & AvatarProps>`
  height: ${({ theme, size }) => (size === 'small' ? theme.spacing(5) : theme.spacing(7))}px;
  width: ${({ theme, size }) => (size === 'small' ? theme.spacing(5) : theme.spacing(7))}px;
`;

export const SiteSetupModalUserManagermentName = styled(Typography)`
  word-break: break-all;
`;

export const SiteSetupModalUserManagermentContainer = styled(Box)`
  cursor: pointer;
`;
