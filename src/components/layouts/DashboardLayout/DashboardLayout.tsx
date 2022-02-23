import { Grid, Box } from '@material-ui/core';
import React from 'react';
import BlankLayout from '../BlankLayout';
import { DashboardBackground } from './DashboardLayout.styled';
import NavigatorBar from './components/DashboardNavigator/DashboardNavigator';
import DashboardHeader from './components/DashboardHeader/DashboardHeader';

interface DashboardLayoutProps {
  children?: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <BlankLayout>
      <DashboardBackground>
        <Box display="flex" height="100vh" id="abc">
          <Box height="100%">
            <NavigatorBar />
          </Box>
          <Grid container xs={12} direction="column">
            <Box
              width="100%"
              height="100%"
              display="flex"
              flexDirection="column"
            >
              <Grid item>
                <DashboardHeader />
              </Grid>
              <Box flexGrow={1} height="100%" overflow="auto">
                {children}
              </Box>
            </Box>
          </Grid>
        </Box>
      </DashboardBackground>
    </BlankLayout>
  );
};

export default DashboardLayout;
