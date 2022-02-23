import React from 'react';
import DashboardLayout from '@components/layouts/DashboardLayout';
import { Box } from '@material-ui/core';
import { useIntl } from 'react-intl';
import { Route, Switch, useRouteMatch, Redirect } from 'react-router-dom';
import HomeEmpty from './HomeEmpty';
import { AuthStatus } from '@stores/shared/types/AuthStatus';
import { useSelector } from 'react-redux';
import { WattAppState } from '@stores/index';

const DashboardPage = () => {
  const { path } = useRouteMatch();
  const intl = useIntl();

  const { authStatus } = useSelector((state: WattAppState) => state.auth);

  return (
    <DashboardLayout>
      <Switch>
        {authStatus === AuthStatus.Unauthozied
          ? (
          <Redirect to={'/start'} />
            )
          : (
          <>
            <Route exact path={path}>
              <Redirect to={`${path}/home`} />
            </Route>
            <Route path={`${path}/home`}>
              <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
                <HomeEmpty />
              </Box>
            </Route>
            <Route path={`${path}/statistic`}>
              <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
                {intl.formatMessage({
                  id: 'dashboard_content_placeholder_statistic',
                  defaultMessage: 'Statistic',
                })}
              </Box>
            </Route>
          </>
            )}
      </Switch>
    </DashboardLayout>
  );
};

export { DashboardPage };
