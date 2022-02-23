import { Box, BoxProps, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { useIntl } from 'react-intl';
import WSliderHorizontal from '@components/WSlider/Horizontal';
import { WButtonStyled } from './DeviceSetupItem.styled';

export interface ButtonSetupItemProps {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

export interface DeviceSetupItemProps {
  icon: React.ReactNode;
  title: string;
  subTitle: string;
  buttons: ButtonSetupItemProps[];
}

interface SiteSetupItemDeviceItemProps {
  title: string;
  description?: string;
}

const SiteSetupItemDeviceItem = ({
  title,
  description,
  ...props
}: SiteSetupItemDeviceItemProps & BoxProps) => {
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

const DeviceSetupItem = (props: DeviceSetupItemProps) => {
  const intl = useIntl();
  const { icon, title, subTitle, buttons } = props;
  return (
    <Box display="flex" alignItems="flex-start" mt={6}>
      <Box>{icon}</Box>
      <Box ml={1}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="caption">{subTitle}</Typography>
        <Box display="flex" mt={2}>
          {buttons.map((button, index) => (
            <WButtonStyled
              key={index}
              size="large"
              variant="outlined"
              startIcon={button.icon}
              active={button.active}
              onClick={() => !!button.onClick && button.onClick()}
            >
              {button.label}
            </WButtonStyled>
          ))}
        </Box>
        {title === 'Device Management' && (
          <Box mt={5}>
            <Grid container spacing={10}>
              <Grid item xs={6}>
                <SiteSetupItemDeviceItem
                  title={intl.formatMessage({
                    id: 'charging_capacity',
                    defaultMessage: 'Charging capacity'
                  })}
                  description="Lorem ipsum dolor sit amet, consectetur"
                >
                  <WSliderHorizontal
                    trackType="grow"
                    data={[7.4, 22]}
                    formatLabel={(val) => val + 'kW'}
                  />
                </SiteSetupItemDeviceItem>
              </Grid>
              <Grid item xs={6}>
                <SiteSetupItemDeviceItem
                  title={intl.formatMessage({
                    id: 'power_grid',
                    defaultMessage: 'Power Grid'
                  })}
                  description="Lorem ipsum dolor sit amet, consectetur"
                >
                  <WSliderHorizontal
                    trackType="linear"
                    cusorType="oval"
                    data={[7.4, 22]}
                    formatLabel={(val) => val + 'kW'}
                  />
                </SiteSetupItemDeviceItem>
              </Grid>
              <Grid item xs={6}>
                <SiteSetupItemDeviceItem
                  title={intl.formatMessage({
                    id: 'protection_for_charging_system',
                    defaultMessage: 'Protection for charging system'
                  })}
                  description="Lorem ipsum dolor sit amet, consectetur"
                >
                  {/* TODO: Circle slider handle here */}
                </SiteSetupItemDeviceItem>
              </Grid>
            </Grid>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default DeviceSetupItem;
