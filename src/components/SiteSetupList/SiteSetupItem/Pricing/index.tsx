import AddIcon from '@components/icons/Add';
import ChevronRightIcon from '@components/icons/ChevronRight';
import CreditCardIcon from '@components/icons/CreditCard';
import { Box, Grid, Typography } from '@material-ui/core';
import theme from '@styles/theme';
import React from 'react';

const SiteSetupItemPricing = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Box px={3} py={2} borderRadius={12} display="flex" alignItems="center" bgcolor={theme.palette.gray[300]}>
          <Box mr={2}>
            <CreditCardIcon />
          </Box>
          <Typography>Free charging</Typography>
          <Box ml="auto">
            <ChevronRightIcon />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box px={3} py={2} borderRadius={12} display="flex" alignItems="center" bgcolor={theme.palette.gray[300]}>
          <Box mr={2}>
            <AddIcon height="22px" width="22px" />
          </Box>
          <Typography>Add Alternate Pricing</Typography>
          <Box ml="auto">
            <ChevronRightIcon />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SiteSetupItemPricing;
