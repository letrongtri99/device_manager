import WButton from '@components/Controls/WButton';
import WTextField from '@components/WTextField';
import { Box, Grid, Typography } from '@material-ui/core';
import { WattAppState } from '@stores/index';
import { RequestStatus } from '@stores/shared/types/RequestStatus';
import { companyActions } from '@stores/slices/company';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

interface FormProps {
  name: string;
  phone: string;
  email: string;
  logoUrl?: string;
  address: string;
  zip: string;
  city: string;
}

const ProfileUpdateCompanyDetailForm = ({ setModalVisible, setIsEditing }: { setModalVisible?: (p: boolean) => void; setIsEditing: (p: boolean) => void }) => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [editable, setEditable] = useState<boolean>(false);

  const { item: companyDetail } = useSelector((state: WattAppState) => state.company.detail);
  const { item } = useSelector((state: WattAppState) => state.user.me);
  const status = useSelector((state: WattAppState) => state.company.update.status);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is not valid'),
    address: Yup.string().required('Name is not valid'),
  });

  useEffect(() => {
    item?.company?.id && dispatch(companyActions.getCompanyDetailRequest(item.company.id));
  }, []);

  useEffect(() => {
    if (isSubmitted && status === RequestStatus.Success) {
      setModalVisible?.(false);
    }
  }, [status]);

  const handleUpdateProfile = (val: FormProps) => {
    if (item?.company?.id) {
      setIsSubmitted(true);
      dispatch(
        companyActions.updateCompanyRequest({
          ...val,
          id: item.company.id,
          address: {
            address: val.address,
            zip: val.zip,
            city: val.city,
          },
        }),
      );
    }
  };

  const handleShowEdit = () => {
    setEditable(true);
    setIsEditing(true);
  };

  if (!companyDetail) return <></>;

  const initFormValues = {
    name: companyDetail.name,
    address: companyDetail.address.address,
    zip: companyDetail.address.zip,
    city: companyDetail.address.city,
    email: companyDetail.email,
    phone: companyDetail.phone,
  };

  return (
    <Formik initialValues={initFormValues} validationSchema={validationSchema} onSubmit={handleUpdateProfile}>
      {({ values, errors, touched, handleChange, setFieldValue, handleSubmit, handleBlur }) => (
        <Box mb={5} display="flex" flexDirection="column" justifyContent="space-between">
          <Box>
            <Box mb={1} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h5">Company Details</Typography>
              {editable
                ? (
                <WButton showShortLineBottom loading={status === RequestStatus.Loading} onClick={() => handleSubmit()} variant="text">
                  {intl.formatMessage({
                    id: 'save',
                    defaultMessage: 'Save',
                  })}
                </WButton>
                  )
                : (
                <WButton onClick={handleShowEdit} variant="text">
                  {intl.formatMessage({
                    id: 'edit',
                    defaultMessage: 'Edit',
                  })}
                </WButton>
                  )}
            </Box>
            <Typography variant="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Typography>
          </Box>
          <Box pt={2}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Box mb={1} width="100%" display="flex" justifyContent="center">
                <WTextField
                  label={intl.formatMessage({
                    id: 'input_label_name',
                    defaultMessage: 'Name',
                  })}
                  labelWidth={20}
                  fullWidth
                  onChange={handleChange('name')}
                  error={!!errors.name && !!touched.name}
                  name="name"
                  value={values.name}
                  onBlur={handleBlur}
                  disabled
                />
              </Box>
              <Box mb={1} width="100%" display="flex" justifyContent="center">
                <WTextField
                  onChange={handleChange('address')}
                  error={!!errors.address && !!touched.address}
                  name="address"
                  labelWidth={20}
                  value={values.address}
                  onBlur={handleBlur}
                  fullWidth
                  label={intl.formatMessage({
                    id: 'input_label_address',
                    defaultMessage: 'Address',
                  })}
                  disabled={!editable}
                />
              </Box>
              <Box mb={1} width="100%">
                <Grid container spacing={1}>
                  <Grid item xs={5}>
                    <WTextField
                      onChange={handleChange('zip')}
                      error={!!errors.zip && !!touched.zip}
                      name="zip"
                      labelWidth={20}
                      value={values.zip}
                      onBlur={handleBlur}
                      fullWidth
                      label={intl.formatMessage({
                        id: 'input_label_zip',
                        defaultMessage: 'Zip',
                      })}
                      disabled={!editable}
                    />
                  </Grid>
                  <Grid item xs={7}>
                    <WTextField
                      onChange={handleChange('city')}
                      error={!!errors.city && !!touched.city}
                      name="city"
                      labelWidth={20}
                      value={values.city}
                      onBlur={handleBlur}
                      fullWidth
                      label={intl.formatMessage({
                        id: 'input_label_city',
                        defaultMessage: 'City',
                      })}
                      disabled={!editable}
                    />
                  </Grid>
                </Grid>
              </Box>
              <Box mb={1} width="100%" display="flex" justifyContent="center">
                <WTextField
                  onChange={handleChange('email')}
                  disabled={!editable}
                  name="email"
                  labelWidth={20}
                  value={values.email}
                  onBlur={handleBlur}
                  fullWidth
                  label={intl.formatMessage({
                    id: 'input_label_emai',
                    defaultMessage: 'Email',
                  })}
                />
              </Box>
              <Box mb={1} width="100%" display="flex" justifyContent="center">
                <WTextField
                  onChange={(e) => setFieldValue('phoneNumber', e.target.value)}
                  name="phone"
                  labelWidth={20}
                  fullWidth
                  value={values.phone}
                  label={intl.formatMessage({
                    id: 'input_label_phone',
                    defaultMessage: 'Phone',
                  })}
                  disabled
                />
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Formik>
  );
};

export default ProfileUpdateCompanyDetailForm;
