import BackSpaceIcon from '@assets/vectors/backspace-icon.svg';
import OnboardingLayout from '@components/layouts/OnboardingLayout';
import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import { WattAppState } from '@stores/index';
import { AccountAction } from '@stores/slices/common';
import { companyActions } from '@stores/slices/company';
import { CreateProfileBody, userActions } from '@stores/slices/user';
import { Formik } from 'formik';
import React from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

const CreateProfileSchema = Yup.object().shape({
  firstName: Yup.string().required('Please check your first name'),
  lastName: Yup.string().required('Please check your last name'),
  email: Yup.string().email('Please check your email').required('Please check your email'),
});

const CreateProfilePage = () => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const { currentAtion } = useSelector((state: WattAppState) => state.common);
  const { companyInfomation } = useSelector((state: WattAppState) => state.company);

  const intiFormValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const handleFormSubmit = (val: CreateProfileBody) => {
    dispatch(userActions.createProfileRequest(val));
    currentAtion === AccountAction.Register && companyInfomation && dispatch(companyActions.registerCompanyRequest(companyInfomation));
  };

  return (
    <OnboardingLayout>
      <Box display="flex" flexDirection="column" textAlign="center" justifyContent="space-between" height={1} position="relative" width={1}>
        <Grid container direction="column">
          <Grid item>
            <Box>
              <Typography variant="subtitle1">
                {intl.formatMessage({
                  id: 'create_profile_page_title',
                  defaultMessage: 'Create your profile',
                })}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box mb={4}>
              <Typography variant="caption">
                {intl.formatMessage({
                  id: 'create_profile_page_description',
                  defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                })}
              </Typography>
            </Box>
          </Grid>
          <Formik initialValues={intiFormValues} validationSchema={CreateProfileSchema} onSubmit={handleFormSubmit}>
            {({ errors, touched, handleSubmit, handleChange, handleBlur, values }) => {
              return (
                <>
                  <Grid item container justify="flex-end">
                    <Grid item xs={6}>
                      <Box mb={2}>
                        <TextField value={values.firstName} size="small" label="First Name" variant="outlined" name="firstName" fullWidth onChange={(val) => handleChange('firstName')(val)} onBlur={handleBlur} error={!!errors.firstName && !!touched.firstName} />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box display="flex" justifyContent="center" alignItems="center" width={1} height="60%">
                        {!!errors.firstName && !!touched.firstName && (
                          <>
                            <BackSpaceIcon />
                            <Typography style={{ fontSize: 14 }}>Please check you first name</Typography>
                          </>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid item container justify="flex-end">
                    <Grid item xs={6}>
                      <Box mb={2}>
                        <TextField value={values.lastName} size="small" label="Last Name" variant="outlined" name="lastName" fullWidth onChange={(val) => handleChange('lastName')(val)} onBlur={handleBlur} error={!!errors.lastName && !!touched.lastName} />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box display="flex" justifyContent="center" alignItems="center" width={1} height="60%">
                        {!!errors.lastName && !!touched.lastName && (
                          <>
                            <BackSpaceIcon />
                            <Typography style={{ fontSize: 14 }}>Please check you last name</Typography>
                          </>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid item container justify="flex-end">
                    <Grid item xs={6}>
                      <Box mb={2}>
                        <TextField value={values.email} size="small" label="Email" variant="outlined" name="email" fullWidth onChange={(val) => handleChange('email')(val)} onBlur={handleBlur} error={!!errors.email && !!touched.email} type="email" />
                      </Box>
                    </Grid>
                    <Grid item xs={3}>
                      <Box display="flex" justifyContent="center" alignItems="center" width={1} height="60%">
                        {!!errors.email && !!touched.email && (
                          <>
                            <BackSpaceIcon />
                            <Typography style={{ fontSize: 14 }}>Please check you email</Typography>
                          </>
                        )}
                      </Box>
                    </Grid>
                  </Grid>
                  <Grid item container justify="center">
                    <Grid item xs={6}>
                      <Box display="flex" width="100%" height={120} alignItems="flex-end" justifyContent="flex-end" flexDirection="column" flexGrow={1}>
                        <Button variant="text" onClick={() => handleSubmit()}>
                          {intl.formatMessage({
                            id: 'next',
                            defaultMessage: 'Next',
                          })}
                        </Button>
                      </Box>
                    </Grid>
                  </Grid>
                </>
              );
            }}
          </Formik>
        </Grid>
      </Box>
    </OnboardingLayout>
  );
};

export default CreateProfilePage;
