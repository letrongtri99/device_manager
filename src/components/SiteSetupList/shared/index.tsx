import { Box, Typography } from '@material-ui/core';
import React, { ReactNode } from 'react';
import { SiteSetupItemSubtitle } from './SiteSetupItemHeader.styled';

interface SiteSetupItemProps {
  title: string;
  subTitle: string;
  icon: ReactNode;
}

const SiteSetupItemHeader = ({ icon, title, subTitle }: SiteSetupItemProps) => {
  return (
    <Box display="flex">
      <Box width={48}>{icon}</Box>
      <Box>
        <Typography variant="subtitle2">{title}</Typography>
        <Box mb={2}>
          <SiteSetupItemSubtitle variant="body1">{subTitle}</SiteSetupItemSubtitle>
        </Box>
      </Box>
    </Box>
  );
};

export default SiteSetupItemHeader;
