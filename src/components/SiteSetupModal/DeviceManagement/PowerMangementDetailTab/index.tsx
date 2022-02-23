import AcUnitIcon from '@components/icons/AcUnit';
import ChevronLeftIcon from '@components/icons/ChevronLeft';
import HorizontalDistributeIcon from '@components/icons/HorizontalDistribute';
import PowerIcon from '@components/icons/Power';
import SiteSetupModalHeader from '@components/SiteSetupModal/Shared/SiteSetupModalHeader';
import WSliderHorizontal from '@components/WSlider/Horizontal';
import { Box, Button, Grid, IconButton, Slide, SlideProps } from '@material-ui/core';
import React from 'react';
import { useIntl } from 'react-intl';
import SiteSetupModalPowerManagementDetailItem from './SiteSetupModalPowerManagementDetailItem';

interface Props {
  onChangeTabClick?: () => void;
}

const SiteSetupModalPowerManagementDetail = ({ onChangeTabClick, ...props }: Props & SlideProps) => {
  const intl = useIntl();

  return (
    <Slide direction="left" mountOnEnter unmountOnExit {...props}>
      <Box>
        <SiteSetupModalHeader
          mb={3}
          icon={
            <IconButton onClick={onChangeTabClick}>
              <ChevronLeftIcon />
            </IconButton>
          }
          title={intl.formatMessage({
            id: 'dashboard_home_site_detail_item_title_device_management',
            defaultMessage: 'Device Management',
          })}
          description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
        />
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
              <SiteSetupModalPowerManagementDetailItem title={intl.formatMessage({ id: 'charging_capacity', defaultMessage: 'Charging capacity' })} description="Lorem ipsum dolor sit amet, consectetur">
                <WSliderHorizontal trackType="grow" data={[7.4, 22]} formatLabel={(val) => val + 'kW'} />
              </SiteSetupModalPowerManagementDetailItem>
            </Grid>
            <Grid item xs={6}>
              <SiteSetupModalPowerManagementDetailItem title={intl.formatMessage({ id: 'power_grid', defaultMessage: 'Power Grid' })} description="Lorem ipsum dolor sit amet, consectetur">
                <WSliderHorizontal trackType="linear" cusorType="oval" data={[7.4, 22]} formatLabel={(val) => val + 'kW'} />
              </SiteSetupModalPowerManagementDetailItem>
            </Grid>
            <Grid item xs={6}>
              <SiteSetupModalPowerManagementDetailItem title={intl.formatMessage({ id: 'protection_for_charging_system', defaultMessage: 'Protection for charging system' })} description="Lorem ipsum dolor sit amet, consectetur">
                {/* TODO: Circle slider handle here */}
              </SiteSetupModalPowerManagementDetailItem>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Slide>
  );
};

export default SiteSetupModalPowerManagementDetail;
