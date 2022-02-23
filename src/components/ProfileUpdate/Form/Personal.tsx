import NotificationsIcon from '@assets/vectors/notifications.svg';
import WButton from '@components/Controls/WButton';
import WTextField from '@components/WTextField';
import { Box, Typography } from '@material-ui/core';
import { WattAppState } from '@stores/index';
import { RequestStatus } from '@stores/shared/types/RequestStatus';
import { UpdateProfileBody, userActions } from '@stores/slices/user';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';

const ProfileUpdatePersonalDetailForm = ({ setModalVisible, setIsEditing }: { setModalVisible?: (p: boolean) => void; setIsEditing: (p: boolean) => void }) => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [editable, setEditable] = useState<boolean>(false);

  const { item } = useSelector((state: WattAppState) => state.user.me);
  const status = useSelector((state: WattAppState) => state.user.status);

  const initFormValues = {
    email: item?.email,
    firstName: item?.firstName,
    lastName: item?.lastName,
    phoneNumber: item?.phone,
  };

  const validateSchema = Yup.object().shape({
    firstName: Yup.string().required('Name is not valid'),
    lastName: Yup.string().required('Name is not valid'),
  });

  useEffect(() => {
    if (isSubmitted && status === RequestStatus.Success) {
      setModalVisible?.(false);
    }
  }, [status]);

  const handleUpdateProfile = (val: UpdateProfileBody) => {
    setIsSubmitted(true);
    dispatch(userActions.updateMyProfileRequest(val));
  };

  const handleShowEdit = () => {
    setEditable(true);
    setIsEditing(true);
  };

  return (
    <Formik initialValues={initFormValues} validationSchema={validateSchema} onSubmit={handleUpdateProfile}>
      {({ values, errors, touched, handleChange, setFieldValue, handleSubmit, handleBlur }) => (
        <Box mb={7} display="flex" flexDirection="column" justifyContent="space-between">
          <Box>
            <Box mb={1} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="h5">Personnal Details</Typography>
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
                    id: 'input_label_first_name',
                    defaultMessage: 'First name',
                  })}
                  labelWidth={20}
                  fullWidth
                  onChange={handleChange('firstName')}
                  error={!!errors.firstName && !!touched.firstName}
                  name="firstName"
                  value={values.firstName}
                  onBlur={handleBlur}
                  disabled={!editable}
                />
              </Box>
              <Box mb={1} width="100%" display="flex" justifyContent="center">
                <WTextField
                  onChange={handleChange('lastName')}
                  error={!!errors.lastName && !!touched.lastName}
                  name="lastName"
                  labelWidth={20}
                  value={values.lastName}
                  onBlur={handleBlur}
                  fullWidth
                  label={intl.formatMessage({
                    id: 'input_label_last_name',
                    defaultMessage: 'Last name',
                  })}
                  disabled={!editable}
                />
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
                  value={values.phoneNumber}
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

export default ProfileUpdatePersonalDetailForm;
