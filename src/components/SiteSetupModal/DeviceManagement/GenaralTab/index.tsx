import WButton from '@components/Controls/WButton';
import AcUnitIcon from '@components/icons/AcUnit';
import AodIcon from '@components/icons/Aod';
import ChevronRightIcon from '@components/icons/ChevronRight';
import DarkIcon from '@components/icons/Dark';
import DeviceIcon from '@components/icons/Device';
import FignerIcon from '@components/icons/Finger';
import HorizontalDistributeIcon from '@components/icons/HorizontalDistribute';
import IdeaIcon from '@components/icons/Idea';
import LightIcon from '@components/icons/Light';
import PowerIcon from '@components/icons/Power';
import RenewIcon from '@components/icons/Renew';
import ThunderIcon from '@components/icons/Thunder';
import SiteSetupModalHeader from '@components/SiteSetupModal/Shared/SiteSetupModalHeader';
import WDropdown from '@components/WDropdown';
import WDropdownItem from '@components/WDropdown/WDropdownItem';
import { Box, Button, IconButton, Slide, SlideProps, Typography } from '@material-ui/core';
import React from 'react';
import { useIntl } from 'react-intl';

interface Props {
  onChangeTabClick?: () => void;
}

const SiteSetupModalDeviceManagementGeneral = ({ onChangeTabClick, ...props }: Props & SlideProps) => {
  const intl = useIntl();

  return (
    <Slide direction="right" mountOnEnter unmountOnExit {...props}>
      <Box>
        <Box mb={8}>
          <SiteSetupModalHeader
            icon={<DeviceIcon />}
            title={intl.formatMessage({
              id: 'dashboard_home_site_detail_item_title_device_management',
              defaultMessage: 'Device Management',
            })}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
          />
        </Box>
        <Box mb={8}>
          <SiteSetupModalHeader
            mb={3}
            icon={<ThunderIcon />}
            rightIcon={
              <IconButton onClick={onChangeTabClick}>
                <ChevronRightIcon />
              </IconButton>
            }
            title={intl.formatMessage({
              id: 'power_management',
              defaultMessage: 'Power Management',
            })}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
          />
          <Box display="flex" gridGap={20}>
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
        </Box>
        <Box mb={3}>
          <SiteSetupModalHeader
            mb={3}
            icon={<AodIcon />}
            title={intl.formatMessage({
              id: 'screen_management',
              defaultMessage: 'Screen Management',
            })}
            description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
          />
          <Box display="flex" gridGap={20} alignItems="flex-start">
            <WDropdown value="2" onSelectValue={(val) => console.log(val)}>
              <WDropdownItem value="1">
                <Box display="flex" alignItems="center" gridGap={20}>
                  <RenewIcon />
                  <Typography variant="h6">
                    {intl.formatMessage({
                      id: 'auto_screen_mode',
                      defaultMessage: 'Auto Screen Mode',
                    })}
                  </Typography>
                </Box>
              </WDropdownItem>
              <WDropdownItem value="2">
                <Box display="flex" alignItems="center" gridGap={20}>
                  <LightIcon />
                  <Typography variant="h6">
                    {intl.formatMessage({
                      id: 'light_screen_mode',
                      defaultMessage: 'Light Screen Mode',
                    })}
                  </Typography>
                </Box>
              </WDropdownItem>
              <WDropdownItem value="3">
                <Box display="flex" alignItems="center" gridGap={20}>
                  <DarkIcon />
                  <Typography variant="h6">
                    {intl.formatMessage({
                      id: 'dark_screen_mode',
                      defaultMessage: 'Dark Screen Mode',
                    })}
                  </Typography>
                </Box>
              </WDropdownItem>
            </WDropdown>
            <WButton variant="contained" color="secondary" startIcon={<IdeaIcon />}>
              {intl.formatMessage({
                id: 'auto_awake_screen',
                defaultMessage: 'Auto Awake screen',
              })}
            </WButton>
            <WButton variant="outlined" color="secondary" startIcon={<FignerIcon />}>
              {intl.formatMessage({
                id: 'tap_to_wake_screen',
                defaultMessage: 'Auto Awake screen',
              })}
            </WButton>
          </Box>
        </Box>
      </Box>
    </Slide>
  );
};

export default SiteSetupModalDeviceManagementGeneral;
