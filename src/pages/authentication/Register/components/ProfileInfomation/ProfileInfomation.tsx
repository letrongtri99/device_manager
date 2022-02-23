import { Box, Button, InputAdornment, Typography } from '@material-ui/core';
import { Formik } from 'formik';
import React from 'react';
import { useIntl } from 'react-intl';
import * as Yup from 'yup';
import { InputLabelFixed, RegisterDescriptonText, TextFieldStyled } from './ProfileInfomation.styled';
import { useHistory } from 'react-router-dom';
import isEmpty from 'lodash/isEmpty';

const ProfileInfomation = () => {
  const intl = useIntl();

  const history = useHistory();

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
  };

  const validationScheme = Yup.object().shape({
    firstName: Yup.string().required(intl.formatMessage({ id: 'message_name_required', defaultMessage: 'First name is required' })),
    lastName: Yup.string().required(intl.formatMessage({ id: 'message_name_required', defaultMessage: 'Last name is required' })),
    email: Yup.string()
      .email()
      .required(intl.formatMessage({ id: 'message_email_required', defaultMessage: 'Email is required' })),
  });

  return (
    <Box width="100%" height="100%">
      <Box display="flex" flexDirection="column">
        <Typography variant="h2" align="center">
          {intl.formatMessage({ id: 'register_create_profile_title', defaultMessage: 'Create your profile' })}
        </Typography>
        <RegisterDescriptonText variant="caption" align="center">
          {intl.formatMessage({ id: 'register_craete_profile_description', defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' })}
        </RegisterDescriptonText>
        <Formik
          initialValues={initialValues}
          validationSchema={validationScheme}
          onSubmit={(field) => {
            history.push('/dashboard');
          }}
        >
          {({ errors, touched, handleSubmit, handleChange, handleBlur, values }) => (
            <>
              <Box display="flex" flexDirection="column" width="50%" marginLeft="auto" marginRight="auto" mt={3}>
                <TextFieldStyled
                  onChange={(e) => {
                    handleChange('firstName')(e);
                  }}
                  variant="outlined"
                  size="small"
                  name="firstName"
                  error={!!errors.firstName && !!touched.firstName}
                  onBlur={handleBlur}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <InputLabelFixed width={60}>{intl.formatMessage({ id: 'input_label_first_name', defaultMessage: 'First Name' })}</InputLabelFixed>
                      </InputAdornment>
                    ),
                  }}
                />

                <TextFieldStyled
                  onChange={(e) => {
                    handleChange('lastName')(e);
                  }}
                  variant="outlined"
                  size="small"
                  name="lastName"
                  error={!!errors.lastName && !!touched.lastName}
                  onBlur={handleBlur}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <InputLabelFixed width={60}>{intl.formatMessage({ id: 'input_label_last_name', defaultMessage: 'Last Name' })}</InputLabelFixed>
                      </InputAdornment>
                    ),
                  }}
                />

                <TextFieldStyled
                  onChange={(e) => handleChange('email')(e)}
                  variant="outlined"
                  size="small"
                  name="email"
                  error={!!errors.email && !!touched.email}
                  onBlur={handleBlur}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <InputLabelFixed width={60}>{intl.formatMessage({ id: 'input_label_email', defaultMessage: 'Email' })}</InputLabelFixed>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box width="50%" display="flex" marginLeft="auto" marginRight="auto" justifyContent="flex-end" mt={8}>
                <Button variant="text" onClick={() => handleSubmit()} disabled={!isEmpty(errors)}>
                  {intl.formatMessage({ id: 'next', defaultMessage: 'Next' })}
                </Button>
              </Box>
            </>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

export default ProfileInfomation;
