import WButton from '@components/Controls/WButton';
import OnboardingLayout from '@components/layouts/OnboardingLayout';
import { Box, Grid, Typography } from '@material-ui/core';
import { WattAppState } from '@stores/index';
import { companyActions, RegisterCompanyBody } from '@stores/slices/company';
import { Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import { FormContainer, RegisterContainer, RegisterInput, SubmitButton, SubmitContainer } from './Register.styled';

const RegisterCompanySchema = Yup.object().shape({
  phone: Yup.string().required('Please check your phone number'),
  email: Yup.string().email('Please check your email').required('Please check your email'),
});

const RegisterCompany = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const selectedCompany = useSelector((state: WattAppState) => state.company.selectedCompany);

  if (!selectedCompany) return <></>;

  const intiFormValues = {
    phone: '',
    email: selectedCompany.mailAddress,
    address: {
      address: selectedCompany.address.address,
      zip: selectedCompany.address.zip,
      city: selectedCompany.address.city,
    },
    name: selectedCompany.name,
    organizationNumber: selectedCompany.organizationNumber,
  };

  const handleFormSubmit = (val: RegisterCompanyBody) => {
    dispatch(companyActions.setCompanyInfomation(val));
    history.push('/auth');
  };

  return (
    <OnboardingLayout stepProps={{ numberOfSteps: 4, step: 2 }}>
      <RegisterContainer display="flex" flexDirection="column" textAlign="center" justifyContent="space-between" height={1} position="relative" width={1}>
        <Box mb={4}>
          <Box mb={1}>
            <Typography variant="subtitle1">Please complete your company details</Typography>
          </Box>
          <Box>
            <Typography variant="caption">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</Typography>
          </Box>
        </Box>
        <Grid container justify="center">
          <Grid item xs={6}>
            <Formik enableReinitialize initialValues={intiFormValues} validationSchema={RegisterCompanySchema} onSubmit={handleFormSubmit} isInitialValid={() => RegisterCompanySchema.isValidSync(intiFormValues)}>
              {({ handleSubmit, handleChange, handleBlur, isValid }) => {
                return (
                  <FormContainer onSubmit={handleSubmit}>
                    <Grid container direction="column">
                      <Grid item>
                        <RegisterInput label="Name" fullWidth type="text" value={intiFormValues.name} name="name" disabled />
                      </Grid>
                      <Grid item>
                        <RegisterInput label="ON" fullWidth type="text" value={intiFormValues.organizationNumber} name="address" disabled />
                      </Grid>
                      <Grid item>
                        <RegisterInput label="Address" fullWidth type="text" value={intiFormValues.address.address} name="address" disabled />
                      </Grid>
                      <Box display="flex" gridGap={15}>
                        <RegisterInput label="Zip" type="text" name="zip" value={intiFormValues.address.zip} disabled />
                        <RegisterInput label="City" type="text" name="city" value={intiFormValues.address.city} disabled />
                      </Box>
                      <Grid item>
                        <RegisterInput label="Email" fullWidth type="Email" name="Email" onChange={handleChange('email')} onBlur={handleBlur} />
                      </Grid>
                      <Grid item>
                        <RegisterInput label="Phone" fullWidth type="tel" name="phone" onChange={handleChange('phone')} onBlur={handleBlur} />
                      </Grid>
                      <Grid item>
                        <SubmitContainer>
                          <SubmitButton onClick={() => history.goBack()}>Back</SubmitButton>
                          <WButton onClick={() => handleSubmit()} showShortLineBottom disabled={!isValid}>
                            Next
                          </WButton>
                        </SubmitContainer>
                      </Grid>
                    </Grid>
                  </FormContainer>
                );
              }}
            </Formik>
          </Grid>
        </Grid>
      </RegisterContainer>
    </OnboardingLayout>
  );
};

export default RegisterCompany;
