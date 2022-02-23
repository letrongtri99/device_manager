import React from 'react';
import OnboardingLayout from '@components/layouts/OnboardingLayout';
import { Box, Typography } from '@material-ui/core';
import { WattAppState } from '@stores/index';
import { AccountAction, commonActions } from '@stores/slices/common';
import WButton from '@components/Controls/WButton';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ContentBox } from './TermsAndConditions.styled';

const TermsAndCondtionsPage = () => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const { currentAtion, isReadTerm } = useSelector((state: WattAppState) => state.common);

  if (isReadTerm) {
    return currentAtion === AccountAction.Login ? <Redirect to="/auth" /> : <Redirect to="/search-company" />;
  }
  return (
    <OnboardingLayout>
      <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%" width="100%" px={6} mx={6}>
        <Box textAlign="center" mb={4}>
          <Typography variant="subtitle1">
            {intl.formatMessage({
              id: 'term_page_title',
              defaultMessage: 'Terms and Conditions',
            })}
          </Typography>
        </Box>
        <ContentBox p={1}>
          <Box
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({
                id: 'term_page_description',
              }),
            }}
          />
        </ContentBox>
        <Box textAlign="right" mt={3}>
          <WButton variant="text" onClick={() => dispatch(commonActions.setIsTermRead(true))} showShortLineBottom>
            {intl.formatMessage({ id: 'agree', defaultMessage: 'Agree' })}
          </WButton>
        </Box>
      </Box>
    </OnboardingLayout>
  );
};

export default TermsAndCondtionsPage;
