import { Box, BoxProps, Typography } from '@material-ui/core';
import React, { ReactNode } from 'react';
import { SiteSetupModalHeaderSubtitle } from './SiteSetupModalHeader.styled';

interface SiteSetupModalHeaderProps {
  icon: ReactNode;
  rightIcon?: ReactNode;
  title: string;
  description: string;
}

const SiteSetupModalHeader = ({ title, description, icon, rightIcon, ...props }: SiteSetupModalHeaderProps & BoxProps) => {
  return (
    <Box {...props}>
      <Box display="flex" alignItems="center">
        <Box mr={2}>{icon}</Box>
        <Typography variant="subtitle2">{title}</Typography>
        {rightIcon && <Box ml="auto">{rightIcon}</Box>}
      </Box>
      <SiteSetupModalHeaderSubtitle variant="h6">{description}</SiteSetupModalHeaderSubtitle>
    </Box>
  );
};

export default SiteSetupModalHeader;
