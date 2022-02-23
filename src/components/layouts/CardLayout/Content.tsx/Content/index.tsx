import DeviceSetupList from '@components/DeviceSetupList';
import BoltIcon from '@components/icons/Bolt';
import LocationIcon from '@components/icons/Location';
import PortsIcon from '@components/icons/Ports';
import SiteSetupList from '@components/SiteSetupList';
import { Box, Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import {
  MapImage,
  PortItem,
  StyledSelection,
  BootstrapInput,
  StyledMenuItem,
  ButtonReset
} from './Content.styled';
import times from 'lodash/times';
import MapLayout from '@components/Map/MapLayout';
import { WattAppState } from '@stores/index';
import theme from '@styles/theme';
import { useIntl } from 'react-intl';
import { RoleTypes } from '@stores/shared/types';
import { HeaderTab } from '../Header/Tab';
import { useSelector } from 'react-redux';

const CardLayoutContentContent = ({
  currentTab
}: {
  cardLayoutContent: string;
  currentTab: string;
}) => {
  const intl = useIntl();
  const { item: siteData } = useSelector(
    (state: WattAppState) => state.site.detail
  );
  const [role, setRole] = useState<RoleTypes>(RoleTypes.CompanyEmployee);

  return (
    <Box width="100%" p={3}>
      {/* eslint-disable-next-line multiline-ternary */}
      {currentTab === HeaderTab.Site ? (
        <Box position="relative">
          <Box mb={3}>
            {siteData ? (
              <MapLayout isSiteItem />
            ) : (
              <MapImage src="https://i.stack.imgur.com/chfhv.png" alt="map" />
            )}
          </Box>
          <Box>
            <SiteSetupList />
          </Box>
        </Box>
      ) : (
        <>
          <Box display="flex" justifyContent="space-between" mb={4}>
            <Box display="flex" gridGap={20}>
              <StyledSelection
                value={role}
                onChange={(e) => setRole(e.target.value as RoleTypes)}
                input={<BootstrapInput />}
              >
                <StyledMenuItem
                  value={RoleTypes.CompanyEmployee}
                  className="menu-item"
                >
                  {intl.formatMessage({
                    id: 'employee_list_title',
                    defaultMessage: 'Employee'
                  })}
                </StyledMenuItem>
                <StyledMenuItem
                  value={RoleTypes.CompanyAdmin}
                  className="menu-item"
                >
                  {intl.formatMessage({
                    id: 'admin',
                    defaultMessage: 'Admin'
                  })}
                </StyledMenuItem>
              </StyledSelection>
              <Box display="flex" alignItems="center">
                <Box
                  width={8}
                  height={8}
                  bgcolor={theme.palette.green[100]}
                  borderRadius={9999}
                  mr={0.5}
                />
                <Typography variant="caption">
                  {intl.formatMessage({
                    id: 'dashboard_home_site_detail_device_status_online',
                    defaultMessage: 'Online'
                  })}
                </Typography>
              </Box>
            </Box>
            <ButtonReset variant="contained">
              Reset to site defaults
            </ButtonReset>
          </Box>
          <Grid container spacing={10}>
            <Grid item xs={6}>
              <Box display="flex" alignItems="flex-start">
                <PortsIcon
                  width={`${theme.spacing(2.5)}px`}
                  height={`${theme.spacing(2.5)}px`}
                />
                <Box ml={1.5}>
                  <Typography variant="h5">Ports</Typography>
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet.
                  </Typography>
                </Box>
              </Box>
              <Box ml={1.5} mt={2}>
                <Grid container spacing={2}>
                  {times(6, (i) => (
                    <Grid item xs={6}>
                      <PortItem
                        width="100%"
                        pl={2}
                        minHeight={40}
                        borderRadius={10}
                        bgcolor="lightgrey"
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Typography variant="h6">Port {i + 1}</Typography>
                        <BoltIcon />
                      </PortItem>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box display="flex" alignItems="flex-start">
                <LocationIcon
                  width={`${theme.spacing(2.5)}px`}
                  height={`${theme.spacing(2.5)}px`}
                />
                <Box ml={1.5}>
                  <Typography variant="h5">Location</Typography>
                  <Typography variant="caption">
                    Lorem ipsum dolor sit amet.
                  </Typography>
                </Box>
              </Box>
              <Box mb={3} mt={2}>
                {/* TODO: Will remove in future */}
                <MapImage src="https://i.stack.imgur.com/chfhv.png" alt="map" />
              </Box>
            </Grid>
          </Grid>
          <Box>
            <DeviceSetupList />
          </Box>
        </>
      )}
    </Box>
  );
};

export default CardLayoutContentContent;
