import AnalyticsIcon from '@components/icons/Analytics';
import HomeIcon from '@components/icons/Home';
import LogoutIcon from '@assets/vectors/logout.svg';
import WattLogo from '@components/icons/Watt';
import { Box, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { useIntl } from 'react-intl';
import { useRouteMatch, NavLink } from 'react-router-dom';
import { NavigatorLink, DashboardNavigatorWapper } from './DashboardNavigator.styled';
import WButton from '@components/Controls/WButton';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '@stores/slices/auth';
import { WattAppState } from '@stores/index';
import { RequestStatus } from '@stores/shared/types/RequestStatus';
import DeviceIcon from '@components/icons/Device';

const NavigatorBar = () => {
  const { path } = useRouteMatch();
  const intl = useIntl();
  const dispatch = useDispatch();

  const { item } = useSelector((state: WattAppState) => state.user.me);
  const logoutStatus = useSelector((state: WattAppState) => state.auth.logoutStatus);

  const handleLogout = () => {
    dispatch(authActions.firebaseLogoutRequest());
  };

  return (
    <DashboardNavigatorWapper height="100vh" display="flex" flexDirection="column" justifyContent="space-between" borderRight="lightgrey thin solid" paddingTop={6} paddingBottom={4} overflow="scroll">
      <Box>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <NavLink exact to={`${path}/home`} activeClassName="navigator-link__active" className="navigator-link">
            <Box mb={2}>
              <WattLogo />
            </Box>
          </NavLink>
          <NavigatorLink to={`${path}/home`} activeClassName="navigator-link__active" className="navigator-link">
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" my={2}>
              <IconButton>
                <HomeIcon />
              </IconButton>
              <Typography className="navlinktext" variant="h6">
                {intl.formatMessage({
                  id: 'left_nav_home_button',
                  defaultMessage: 'Home',
                })}
              </Typography>
            </Box>
          </NavigatorLink>
          {!!item?.company && (
            <NavigatorLink exact to={`${path}/statistic`} activeClassName="navigator-link__active" className="navigator-link">
              <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" my={2}>
                <IconButton>
                  <DeviceIcon />
                </IconButton>
                <Typography className="navlinktext" variant="h6">
                  {intl.formatMessage({
                    id: 'dashboard_home_devices_category',
                    defaultMessage: 'Devices',
                  })}
                </Typography>
              </Box>
            </NavigatorLink>
          )}
        </Box>
      </Box>
      <Box textAlign="center">
        <WButton startIcon={logoutStatus === RequestStatus.Loading} disabled={logoutStatus === RequestStatus.Loading} variant="text" onClick={handleLogout}>
          <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
            <Box mb={1}>
              <LogoutIcon />
            </Box>
            <Typography variant="h6" className="navlinktext">
              {intl.formatMessage({
                id: 'left_nav_logout_button',
                defaultMessage: 'Log out',
              })}
            </Typography>
          </Box>
        </WButton>
      </Box>
    </DashboardNavigatorWapper>
  );
};

export default NavigatorBar;
