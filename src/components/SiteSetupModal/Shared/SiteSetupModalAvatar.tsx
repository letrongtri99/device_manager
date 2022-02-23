import { AvatarProps, Box } from '@material-ui/core';
import React from 'react';
import { SiteSetupModalUserManagermentAvatar, SiteSetupModalUserManagermentContainer, SiteSetupModalUserManagermentName } from './SiteSetupModalAvatar.styled';

const SiteSetupModalAvatar = ({ name, size, ...props }: AvatarProps & { name: string; size?: 'small' | 'default' }) => {
  return (
    <SiteSetupModalUserManagermentContainer maxWidth={56} textAlign="center">
      <Box mb={1}>
        <SiteSetupModalUserManagermentAvatar size={size} {...props} alt={name} />
      </Box>
      <SiteSetupModalUserManagermentName variant="body2">{name}</SiteSetupModalUserManagermentName>
    </SiteSetupModalUserManagermentContainer>
  );
};

export default SiteSetupModalAvatar;
