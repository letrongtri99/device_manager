import { Card, Grid, Box, CardHeader, Avatar } from '@material-ui/core';
import React from 'react';
import SitesAndDevicesHeader from './components/SitesAndDevicesHeader/SitesAndDevicesHeader';
import SitesAndDevicesContent from './components/SitesAndDevicesContent/SitesAndDevicesContent';
import { SitesAndDevicesCard } from './DashboardSitesAndDevices.styled';

interface DashboardSitesAndDevicesProps {}

const DashboardSitesAndDevices: React.FC<DashboardSitesAndDevicesProps> = ({}) => {
  return (
    <SitesAndDevicesCard>
      <Card>
        <Box maxHeight="70vh" overflow="scroll">
          <Grid container direction="column">
            <Grid item>
              <SitesAndDevicesHeader />
            </Grid>
            <Grid item>
              <SitesAndDevicesContent />
            </Grid>
          </Grid>
        </Box>
      </Card>
    </SitesAndDevicesCard>
  );
};

export default DashboardSitesAndDevices;
