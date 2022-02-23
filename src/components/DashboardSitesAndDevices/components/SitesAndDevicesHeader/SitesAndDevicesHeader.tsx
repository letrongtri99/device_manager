import { Typography, Grid, IconButton, Card, Box } from '@material-ui/core';
import React from 'react';
import AddIcon from '@components/icons/Add';

const SitesAndDevicesHeader: React.FC = ({}) => {
  return (
    <Box px={2} py={1}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Grid item xs={5}>
          <Typography>Your Sites</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography>
            Devices <Typography variant="caption">1</Typography>
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <IconButton>
            <AddIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SitesAndDevicesHeader;
