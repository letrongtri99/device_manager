import { AvatarProps, Box } from '@material-ui/core';
import React from 'react';
import { SiteSetupItemAccessManagermentAvatar, SiteSetupItemAccessManagermentContainer, SiteSetupItemAccessManagermentName } from './SiteSetupItemAccessAvatar.styled';

const SiteSetupItemAccessAvatar = ({ name, size, ...props }: AvatarProps & { name: string; size?: 'small' | 'default' }) => {
  return (
    <SiteSetupItemAccessManagermentContainer maxWidth={56} textAlign="center">
      <Box mb={1}>
        <SiteSetupItemAccessManagermentAvatar size={size} {...props} alt={name} />
      </Box>
      <SiteSetupItemAccessManagermentName variant="body2">{name}</SiteSetupItemAccessManagermentName>
    </SiteSetupItemAccessManagermentContainer>
  );
};

export default SiteSetupItemAccessAvatar;
