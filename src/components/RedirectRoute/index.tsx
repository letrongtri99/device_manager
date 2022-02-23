import React from 'react';
import { WattAppState } from '@stores/index';
import { RouteProps, Route, Redirect, RedirectProps } from 'react-router';
import { useSelector } from 'react-redux';
import { RequestStatus } from '@stores/shared/types/RequestStatus';

interface RedirectRouteProps extends RouteProps {
  redirect: RedirectProps & { when: boolean };
}

export const RedirectRoute = ({
  children,
  redirect,
  ...props
}: RedirectRouteProps) => {
  const { status } = useSelector((state: WattAppState) => state.auth);

  if (status === RequestStatus.Idle) return <></>;

  const renderRoute = () => {
    if (redirect.when) return <Redirect {...redirect} />;
    return children;
  };

  return <Route {...props} render={renderRoute} />;
};
