import { Box, Typography, BoxProps } from '@material-ui/core';
import React from 'react';

interface Props {
  title: string;
  description?: string;
}

const SiteSetupModalPowerManagementDetailItem = ({ title, description, ...props }: Props & BoxProps) => {
  return (
    <Box>
      <Box mb={3}>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="caption">{description}</Typography>
      </Box>
      {props.children}
    </Box>
  );
};

export default SiteSetupModalPowerManagementDetailItem;
