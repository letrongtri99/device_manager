import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { DeviceItemAvatar, DeviceItemContainer } from './DeviceItem.styled';
import { useIntl } from 'react-intl';
import theme from '@styles/theme';

export interface DeviceItemProps {
  avatar?: string;
  deviceID: string;
  active: boolean;
}
const DeviceItem = ({ avatar, deviceID, active }: DeviceItemProps) => {
  const intl = useIntl();

  return (
    <DeviceItemContainer display="flex" alignItems="center">
      <DeviceItemAvatar src={avatar} />
      <Box>
        <Typography variant="subtitle2">
          {intl.formatMessage({ id: 'dashboard_home_site_detail_device_status_device_id', defaultMessage: 'Device ID' })} {deviceID}
        </Typography>
        <Box>
          {active
            ? (
            <Box display="flex" alignItems="center">
              <Box width={8} height={8} bgcolor={theme.palette.green[100]} borderRadius={9999} mr={0.5}></Box>
              <Typography variant="caption">{intl.formatMessage({ id: 'dashboard_home_site_detail_device_status_online', defaultMessage: 'Online' })}</Typography>
            </Box>
              )
            : (
            <Box display="flex" alignItems="center">
              <Box width={8} height={8} bgcolor={theme.palette.grey[300]} borderRadius={9999} mr={0.5}></Box>
              <Typography variant="caption">{intl.formatMessage({ id: 'dashboard_home_site_detail_device_status_online', defaultMessage: 'Online' })}</Typography>
            </Box>
              )}
        </Box>
      </Box>
    </DeviceItemContainer>
  );
};

export default DeviceItem;
