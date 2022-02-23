import AcUnitIcon from '@components/icons/AcUnit';
import HorizontalDistributeIcon from '@components/icons/HorizontalDistribute';
import PowerIcon from '@components/icons/Power';
import WSliderHorizontal from '@components/WSlider/Horizontal';
import { Box, BoxProps, Button, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useIntl } from 'react-intl';

interface SiteSetupItemDeviceItemProps {
  title: string;
  description?: string;
}

const SiteSetupItemDeviceItem = ({ title, description, ...props }: SiteSetupItemDeviceItemProps & BoxProps) => {
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

const SiteSetupItemDevice = () => {
  const intl = useIntl();

  return (
    <Box>
      <Box display="flex" gridGap={20} mb={8}>
        <Button variant="contained" color="secondary" startIcon={<PowerIcon />}>
          {intl.formatMessage({
            id: 'power',
            defaultMessage: 'Power',
          })}
        </Button>
        <Button variant="outlined" color="secondary" startIcon={<AcUnitIcon />}>
          {intl.formatMessage({
            id: 'winter_mode',
            defaultMessage: 'Winter Mode',
          })}
        </Button>
        <Button variant="outlined" color="secondary" startIcon={<HorizontalDistributeIcon />}>
          {intl.formatMessage({
            id: 'load_distribution',
            defaultMessage: 'Load Distribution',
          })}
        </Button>
      </Box>
      <Box>
        <Grid container spacing={10}>
          <Grid item xs={6}>
            <SiteSetupItemDeviceItem title={intl.formatMessage({ id: 'charging_capacity', defaultMessage: 'Charging capacity' })} description="Lorem ipsum dolor sit amet, consectetur">
              <WSliderHorizontal trackType="grow" data={[7.4, 22]} formatLabel={(val) => val + 'kW'} />
            </SiteSetupItemDeviceItem>
          </Grid>
          <Grid item xs={6}>
            <SiteSetupItemDeviceItem title={intl.formatMessage({ id: 'power_grid', defaultMessage: 'Power Grid' })} description="Lorem ipsum dolor sit amet, consectetur">
              <WSliderHorizontal trackType="linear" cusorType="oval" data={[7.4, 22]} formatLabel={(val) => val + 'kW'} />
            </SiteSetupItemDeviceItem>
          </Grid>
          <Grid item xs={6}>
            <SiteSetupItemDeviceItem title={intl.formatMessage({ id: 'protection_for_charging_system', defaultMessage: 'Protection for charging system' })} description="Lorem ipsum dolor sit amet, consectetur">
              {/* TODO: Circle slider handle here */}
            </SiteSetupItemDeviceItem>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SiteSetupItemDevice;
