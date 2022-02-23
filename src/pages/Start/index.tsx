import WButton from '@components/Controls/WButton';
import OnboardingLayout from '@components/layouts/OnboardingLayout';
import { Box } from '@material-ui/core';
import { WattAppState } from '@stores/index';
import { RoleTypes } from '@stores/shared/types';
import { AccountAction, commonActions } from '@stores/slices/common';
import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Start = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const intl = useIntl();
  const { me } = useSelector((state: WattAppState) => state.user);

  useEffect(() => {
    if (
      !!me.item &&
      me.item.company?.roleType !== RoleTypes.CompanyAdmin &&
      me.item.company?.roleType !== RoleTypes.CompanyOwner
    ) {
      toast.error(
        `${intl.formatMessage({
          id: 'alert_permission_login',
          defaultMessage: 'You do not have permission to login this web page'
        })}`,
        {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        }
      );
    }
    dispatch(commonActions.setIsTermRead(false));
  }, []);

  return (
    <OnboardingLayout>
      <ToastContainer />
      <Box width={195}>
        <Box mb={3}>
          <WButton
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => {
              dispatch(commonActions.setAccountAction(AccountAction.Register));
              history.push('/search-company');
            }}
          >
            Register
          </WButton>
        </Box>
        <Box>
          <WButton
            fullWidth
            variant="contained"
            color="secondary"
            onClick={() => {
              dispatch(commonActions.setAccountAction(AccountAction.Login));
              history.push('/auth');
            }}
          >
            Login
          </WButton>
        </Box>
      </Box>
    </OnboardingLayout>
  );
};

export default Start;
