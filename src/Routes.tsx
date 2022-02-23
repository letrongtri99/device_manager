import React from 'react';
import { RegisterPage } from '@pages/authentication/Register';
import RegisterCompany from '@pages/Company/Register';
import SearchCompany from '@pages/Company/SearchCompany';
import CreateProfilePage from '@pages/CreateProfile';
import { DashboardPage } from '@pages/Dashboard';
import OTPPage from '@pages/OTP';
import StartPage from '@pages/Start';
import TermsAndCondtionsPage from '@pages/TermsAndConditions';
import { RoleTypes } from '@stores/shared/types';
import { AuthStatus } from '@stores/shared/types/AuthStatus';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { WattAppState } from './stores';
import { authActions } from '@stores/slices/auth';

export const Routes = () => {
  const dispatch = useDispatch();
  const { authStatus } = useSelector((state: WattAppState) => state.auth);
  const { me, checkRegistered } = useSelector(
    (state: WattAppState) => state.user
  );

  const renderAuthStep = () => {
    if (
      me.item?.company?.roleType !== RoleTypes.CompanyAdmin &&
      me.item?.company?.roleType !== RoleTypes.CompanyOwner &&
      me.item?.company?.roleType !== RoleTypes.BillingAdmin
    ) {
      dispatch(authActions.firebaseLogoutRequest());
    } else if (me.item) {
      return <Redirect to="/dashboard" />;
    } else {
      return <Redirect to="/create-profile" />;
    }
  };

  return (
    <Switch>
      <Route path="/start">
        <StartPage />
      </Route>
      {authStatus === AuthStatus.LoggedIn && checkRegistered ? (
        <>
          {renderAuthStep()}
          <Route path="/dashboard">
            <DashboardPage />
          </Route>
          <Route path="/create-profile">
            <CreateProfilePage />
          </Route>
          <Route path="/register-company">
            <RegisterCompany />
          </Route>
        </>
      ) : (
        <>
          <Redirect to="/start" />
          <Route path="/verify-otp">
            <OTPPage />
          </Route>
          <Route path="/auth">
            <RegisterPage />
          </Route>
          <Route path="/search-company">
            <SearchCompany />
          </Route>
          <Route path="/register-company">
            <RegisterCompany />
          </Route>
          <Route path="/terms-and-conditions">
            <TermsAndCondtionsPage />
          </Route>
        </>
      )}
    </Switch>
  );
};
