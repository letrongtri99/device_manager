import OnboardingLayout from '@components/layouts/OnboardingLayout';
import WAutoComplete from '@components/WAutoComplete';
import WAutoCompleteItemCompanySearch from '@components/WAutoComplete/WAutoCompleteItem/CompanySearch';
import { Box, Grid, Typography } from '@material-ui/core';
import { WattAppState } from '@stores/index';
import { companyActions } from '@stores/slices/company';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

const SearchCompany = () => {
  const dispatch = useDispatch();
  const intl = useIntl();
  const history = useHistory();

  const { isReadTerm } = useSelector((state: WattAppState) => state.common);
  const { items: registrationCompany, fetching } = useSelector((state: WattAppState) => state.company.registration);

  const [value, setValue] = useState('');

  useEffect(() => {
    dispatch(companyActions.getRegistrationCompanyRequest({ SearchTerm: value || 'A'}));
  }, [value]);

  return !isReadTerm
    ? (
    <Redirect to="/terms-and-conditions" />
      )
    : (
    <OnboardingLayout stepProps={{ numberOfSteps: 4, step: 1 }}>
      <Box display="flex" flexDirection="column" textAlign="center" justifyContent="space-between" height={1} position="relative" width={1}>
        <Grid container direction="column">
          <Grid item>
            <Box mb={2}>
              <Typography variant="subtitle1">
                {intl.formatMessage({
                  id: 'search_company_page_title',
                  defaultMessage: 'Register company',
                })}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box mb={4}>
              <Typography variant="caption">
                {intl.formatMessage({
                  id: 'search_company_page_description',
                  defaultMessage: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
                })}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <WAutoComplete
              loading={fetching}
              options={registrationCompany}
              onInputChange={(text) => setValue(text)}
              renderOption={(option, inputValue) => <WAutoCompleteItemCompanySearch inputValue={inputValue} name={option.name} phone={option.organizationNumber} />}
              placeholder={intl.formatMessage({
                id: 'search_company_input_placeholder',
                defaultMessage: 'Find your company by entering company name or organisation number',
              })}
              onSelectOption={(val) => {
                dispatch(companyActions.setSelectedCompany(val));
                history.push('/register-company');
              }}
              filterOption={(options, inputValue) => options.filter((o) => !!String(o.organizationNumber).includes(inputValue) || !!o.name?.toLowerCase().includes(inputValue.toLowerCase()))}
            />
          </Grid>
        </Grid>
      </Box>
    </OnboardingLayout>
      );
};

export default SearchCompany;
