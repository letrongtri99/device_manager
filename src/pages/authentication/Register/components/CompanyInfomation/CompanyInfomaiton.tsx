import { Box, Button, InputAdornment, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { InputLabelFixed, TextFieldStyled, RegisterDescriptonText } from './CompanyInfomation.styled';
import { Formik } from 'formik';
import * as Yup from 'yup';
import parsePhoneNumber from 'libphonenumber-js';
import { useIntl } from 'react-intl';
import isEmpty from 'lodash/isEmpty';
import { RegisterStatus } from '@pages/authentication/Register';

export interface CompanyInfomationProps {
  setStep?: (step: number) => void;
}

const CompanyInfomation = ({ setStep }: CompanyInfomationProps) => {
  const [isPhoneNumberValid, setPhoneNumberValid] = useState<boolean>(true);
  const intl = useIntl();

  const initialValues = {
    name: '',
    address: '',
    zip: '',
    city: '',
    email: '',
    phone: '',
  };

  const validationScheme = Yup.object().shape({
    name: Yup.string().required(intl.formatMessage({ id: 'message_name_required', defaultMessage: 'Name is required.' })),
    address: Yup.string().required(intl.formatMessage({ id: 'message_address_required', defaultMessage: 'Address is required.' })),
    zip: Yup.number().required(intl.formatMessage({ id: 'message_zip_required', defaultMessage: 'Zip is required.' })),
    city: Yup.string().required(intl.formatMessage({ id: 'message_city_required', defaultMessage: 'City name is required.' })),
    email: Yup.string()
      .email()
      .required(intl.formatMessage({ id: 'message_email_required', defaultMessage: 'Email is required.' })),
    phone: Yup.string().required(intl.formatMessage({ id: 'message_phone_required', defaultMessage: 'Phone is required.' })),
  });

  return (
    <Box width="100%" height="100%">
      <Box display="flex" flexDirection="column">
        <Typography variant="h2" align="center">
          {intl.formatMessage({ id: 'register_company_company_title', defaultMessage: 'Please complete your company details' })}
        </Typography>
        <RegisterDescriptonText variant="caption" align="center">
          {intl.formatMessage({ id: 'register_company_company_description', defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' })}
        </RegisterDescriptonText>
        <Formik
          initialValues={initialValues}
          validationSchema={validationScheme}
          onSubmit={(field) => {
            setStep?.(RegisterStatus.RegisterWithPhoneNumber);
          }}
        >
          {({ errors, touched, handleSubmit, handleChange, handleBlur, values }) => (
            <>
              <Box display="flex" flexDirection="column" width="50%" marginLeft="auto" marginRight="auto" mt={3}>
                <TextFieldStyled
                  onChange={handleChange('name')}
                  variant="outlined"
                  size="small"
                  name="name"
                  error={!!errors.name && !!touched.name}
                  onBlur={handleBlur}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <InputLabelFixed width={50}>{intl.formatMessage({ id: 'input_label_name', defaultMessage: 'Name' })}</InputLabelFixed>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextFieldStyled
                  onChange={handleChange('address')}
                  variant="outlined"
                  size="small"
                  name="address"
                  error={!!errors.address && !!touched.address}
                  onBlur={handleBlur}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <InputLabelFixed width={50}>{intl.formatMessage({ id: 'input_label_address', defaultMessage: 'Address' })}</InputLabelFixed>
                      </InputAdornment>
                    ),
                  }}
                />
                <Box display="flex" justifyContent="space-between">
                  <TextFieldStyled
                    onChange={handleChange('zip')}
                    variant="outlined"
                    size="small"
                    name="zip"
                    error={!!errors.zip && !!touched.zip}
                    onBlur={handleBlur}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <InputLabelFixed width={50}>{intl.formatMessage({ id: 'input_label_zip', defaultMessage: 'Zip' })}</InputLabelFixed>
                        </InputAdornment>
                      ),
                    }}
                    w={40}
                  />
                  <TextFieldStyled
                    onChange={handleChange('city')}
                    variant="outlined"
                    size="small"
                    name="city"
                    error={!!errors.city && !!touched.city}
                    onBlur={handleBlur}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <InputLabelFixed width={20}>{intl.formatMessage({ id: 'input_label_city', defaultMessage: 'City' })}</InputLabelFixed>
                        </InputAdornment>
                      ),
                    }}
                    w={58}
                  />
                </Box>
                <TextFieldStyled
                  onChange={handleChange('email')}
                  variant="outlined"
                  size="small"
                  name="email"
                  error={!!errors.email && !!touched.email}
                  onBlur={handleBlur}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <InputLabelFixed width={50}>{intl.formatMessage({ id: 'input_label_email', defaultMessage: 'Email' })}</InputLabelFixed>
                      </InputAdornment>
                    ),
                  }}
                />
                <TextFieldStyled
                  onChange={handleChange('phone')}
                  variant="outlined"
                  size="small"
                  name="phone"
                  error={(!!errors.phone && !!touched.phone) || !isPhoneNumberValid}
                  onBlur={(e) => {
                    const isPhoneValid = parsePhoneNumber(values.phone, { extract: false });
                    setPhoneNumberValid(!!isPhoneValid);
                    handleBlur(e);
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <InputLabelFixed width={50}>{intl.formatMessage({ id: 'input_label_phone', defaultMessage: 'Phone' })}</InputLabelFixed>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <Box width="50%" display="flex" marginLeft="auto" marginRight="auto" justifyContent="space-between" mt={8}>
                <Button variant="text" onClick={() => !!setStep && setStep(RegisterStatus.SelectCompany)}>
                  {intl.formatMessage({ id: 'back', defaultMessage: 'Back' })}
                </Button>
                <Button variant="text" onClick={() => handleSubmit()} disabled={!isPhoneNumberValid || !isEmpty(errors)}>
                  {intl.formatMessage({ id: 'netx', defaultMessage: 'Next' })}
                </Button>
              </Box>
            </>
          )}
        </Formik>
      </Box>
    </Box>
  );
};
export default CompanyInfomation;
