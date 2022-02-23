import React from 'react';
import { useIntl } from 'react-intl';
import { Box, Grid, Typography, Select } from '@material-ui/core';
import SiteSetupModalHeader from '../Shared/SiteSetupModalHeader';
import CreditCardIcon from '@components/icons/CreditCard';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  PayButton,
  AlertButton,
  InputDescription,
  InputValue,
  Unit,
  SelectBox
} from './PricingManagement.styled';

interface SitePricing {
  monthly: number;
  perKwh: number;
  minimumSession: number;
  sessionStarting: number;
  perMinute: number;
  perMinuteUnit: number;
  selectPerMinute: string;
  alternateMinute: number;
  alternateMinuteUnit: number;
  selectAlternateMinute: string;
}

const SiteSetupModalPricingManagerment = () => {
  const intl = useIntl();

  const initFormValues = {
    monthly: 0,
    perKwh: 0,
    minimumSession: 0,
    sessionStarting: 0,
    perMinute: 0,
    perMinuteUnit: 0,
    selectPerMinute: 'minutes',
    alternateMinute: 0,
    alternateMinuteUnit: 0,
    selectAlternateMinute: 'minutes'
  };

  const PricingSchema = Yup.object().shape({
    monthly: Yup.number().required().positive().integer(),
    perKwh: Yup.number().required().positive().integer(),
    minimumSession: Yup.number().required().positive().integer(),
    sessionStarting: Yup.number().required().positive().integer(),
    perMinute: Yup.number().required().positive().integer(),
    perMinuteUnit: Yup.number().required().positive().integer(),
    selectPerMinute: Yup.string().required(),
    alternateMinute: Yup.number().required().positive().integer(),
    alternateMinuteUnit: Yup.number().required().positive().integer(),
    selectAlternateMinute: Yup.string().required()
  });

  const handleFormSubmit = (val: SitePricing) => {
    console.log(val);
  };

  return (
    <Box>
      <Box mb={3}>
        <SiteSetupModalHeader
          icon={<CreditCardIcon />}
          title={intl.formatMessage({
            id: 'dashboard_home_site_detail_item_title_pricing',
            defaultMessage: 'Pricing'
          })}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          }
        />
      </Box>
      <Formik
        initialValues={initFormValues}
        validationSchema={PricingSchema}
        onSubmit={handleFormSubmit}
        validateOnMount
        validateOnChange
      >
        {({
          errors,
          values,
          handleSubmit,
          handleChange,
          resetForm,
          dirty,
          validateForm,
          setErrors
        }) => {
          const clearAll = () => {
            resetForm();
            validateForm(initFormValues);
            setErrors(errors);
          };

          return (
            <Box>
              <Box mb={3}>
                <PayButton variant="outlined" onClick={() => handleSubmit()}>
                  {intl.formatMessage({
                    id: 'pay_per_chage',
                    defaultMessage: 'Pay per charge'
                  })}
                </PayButton>
              </Box>
              <Box mb={3}>
                <AlertButton
                  disabled={!dirty}
                  variant="outlined"
                  onClick={clearAll}
                  clear={dirty}
                >
                  {dirty
                    ? intl.formatMessage({
                        id: 'clear_all',
                        defaultMessage: 'Clear All'
                      })
                    : intl.formatMessage({
                        id: 'pricing_alert',
                        defaultMessage: 'Pricing has not been set for this site'
                      })}
                </AlertButton>
              </Box>
              <Box mb={3} pl={2.5}>
                <Grid container>
                  <Grid item xs={5}>
                    <Box mb={3}>
                      <Typography variant="subtitle2">
                        {intl.formatMessage({
                          id: 'monthly_fee',
                          defaultMessage: 'Monthly fee'
                        })}
                      </Typography>
                      <InputDescription variant="body1">
                        {intl.formatMessage({
                          id: 'register_company_description',
                          defaultMessage:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        })}
                      </InputDescription>
                      <Box mt={2}>
                        <Grid container>
                          <InputValue
                            size="small"
                            variant={'outlined' as 'filled'}
                            value={values.monthly}
                            onChange={handleChange('monthly')}
                            failed={!!errors.monthly}
                          ></InputValue>
                          <Unit variant="body1">
                            {intl.formatMessage({
                              id: 'unit',
                              defaultMessage: 'NOK'
                            })}
                          </Unit>
                        </Grid>
                      </Box>
                    </Box>
                    <Box mb={3}>
                      <Typography variant="subtitle2">
                        {intl.formatMessage({
                          id: 'per_kwh_free',
                          defaultMessage: 'Per kWh free'
                        })}
                      </Typography>
                      <InputDescription variant="body1">
                        {intl.formatMessage({
                          id: 'register_company_description',
                          defaultMessage:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        })}
                      </InputDescription>
                      <Box mt={2}>
                        <Grid container>
                          <InputValue
                            size="small"
                            variant={'outlined' as 'filled'}
                            value={values.perKwh}
                            onChange={handleChange('perKwh')}
                            failed={!!errors.perKwh}
                          ></InputValue>
                          <Unit variant="body1">
                            {intl.formatMessage({
                              id: 'unit',
                              defaultMessage: 'NOK'
                            })}
                          </Unit>
                        </Grid>
                      </Box>
                    </Box>
                    <Box mb={3}>
                      <Typography variant="subtitle2">
                        {intl.formatMessage({
                          id: 'minimum_session',
                          defaultMessage: 'Minimum session fee'
                        })}
                      </Typography>
                      <InputDescription variant="body1">
                        {intl.formatMessage({
                          id: 'register_company_description',
                          defaultMessage:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        })}
                      </InputDescription>
                      <Box mt={2}>
                        <Grid container>
                          <InputValue
                            size="small"
                            variant={'outlined' as 'filled'}
                            value={values.minimumSession}
                            onChange={handleChange('minimumSession')}
                            failed={!!errors.minimumSession}
                          ></InputValue>
                          <Unit variant="body1">
                            {intl.formatMessage({
                              id: 'unit',
                              defaultMessage: 'NOK'
                            })}
                          </Unit>
                        </Grid>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={7}>
                    <Box mb={3}>
                      <Typography variant="subtitle2">
                        {intl.formatMessage({
                          id: 'session_starting',
                          defaultMessage: 'Session starting fee'
                        })}
                      </Typography>
                      <InputDescription variant="body1">
                        {intl.formatMessage({
                          id: 'register_company_description',
                          defaultMessage:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        })}
                      </InputDescription>
                      <Box mt={2}>
                        <Grid container>
                          <InputValue
                            size="small"
                            variant={'outlined' as 'filled'}
                            right
                            value={values.sessionStarting}
                            onChange={handleChange('sessionStarting')}
                            failed={!!errors.sessionStarting}
                          ></InputValue>
                          <Unit variant="body1">
                            {intl.formatMessage({
                              id: 'unit',
                              defaultMessage: 'NOK'
                            })}
                          </Unit>
                        </Grid>
                      </Box>
                    </Box>
                    <Box mb={3}>
                      <Typography variant="subtitle2">
                        {intl.formatMessage({
                          id: 'per_minute',
                          defaultMessage: 'Per minute fee'
                        })}
                      </Typography>
                      <InputDescription variant="body1">
                        {intl.formatMessage({
                          id: 'register_company_description',
                          defaultMessage:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        })}
                      </InputDescription>
                      <Box mt={2}>
                        <Grid container>
                          <InputValue
                            size="small"
                            variant={'outlined' as 'filled'}
                            value={values.perMinute}
                            onChange={handleChange('perMinute')}
                            right
                            failed={!!errors.perMinute}
                          ></InputValue>
                          <Unit variant="body1">
                            {intl.formatMessage({
                              id: 'unit',
                              defaultMessage: 'NOK'
                            })}
                          </Unit>
                          <Unit variant="body1" right>
                            {intl.formatMessage({
                              id: 'every',
                              defaultMessage: 'every'
                            })}
                          </Unit>
                          <InputValue
                            size="small"
                            variant={'outlined' as 'filled'}
                            value={values.perMinuteUnit}
                            onChange={handleChange('perMinuteUnit')}
                            right
                            failed={!!errors.perMinuteUnit}
                          ></InputValue>
                          <SelectBox>
                            <Select
                              native
                              value={values.selectPerMinute}
                              onChange={handleChange('selectPerMinute')}
                            >
                              <option value="minutes">
                                {intl.formatMessage({
                                  id: 'minutes',
                                  defaultMessage: 'Minutes'
                                })}
                              </option>
                              <option value="hours">
                                {intl.formatMessage({
                                  id: 'hours',
                                  defaultMessage: 'Hours'
                                })}
                              </option>
                            </Select>
                          </SelectBox>
                        </Grid>
                      </Box>
                    </Box>
                    <Box mb={3}>
                      <Typography variant="subtitle2">
                        {intl.formatMessage({
                          id: 'alternate_minute',
                          defaultMessage: 'Alternate minute fee'
                        })}
                      </Typography>
                      <InputDescription variant="body1">
                        {intl.formatMessage({
                          id: 'register_company_description',
                          defaultMessage:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
                        })}
                      </InputDescription>
                      <Box mt={2}>
                        <Grid container>
                          <InputValue
                            size="small"
                            variant={'outlined' as 'filled'}
                            value={values.alternateMinute}
                            onChange={handleChange('alternateMinute')}
                            right
                            failed={!!errors.alternateMinute}
                          ></InputValue>
                          <Unit variant="body1">
                            {intl.formatMessage({
                              id: 'unit',
                              defaultMessage: 'NOK'
                            })}
                          </Unit>
                          <Unit variant="body1" right>
                            {intl.formatMessage({
                              id: 'every',
                              defaultMessage: 'every'
                            })}
                          </Unit>
                          <InputValue
                            size="small"
                            variant={'outlined' as 'filled'}
                            value={values.alternateMinuteUnit}
                            onChange={handleChange('alternateMinuteUnit')}
                            right
                            failed={!!errors.alternateMinuteUnit}
                          ></InputValue>
                          <SelectBox>
                            <Select
                              native
                              value={values.selectAlternateMinute}
                              onChange={handleChange('selectAlternateMinute')}
                            >
                              <option value="minutes">
                                {intl.formatMessage({
                                  id: 'minutes',
                                  defaultMessage: 'Minutes'
                                })}
                              </option>
                              <option value="hours">
                                {intl.formatMessage({
                                  id: 'hours',
                                  defaultMessage: 'Hours'
                                })}
                              </option>
                            </Select>
                          </SelectBox>
                        </Grid>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          );
        }}
      </Formik>
    </Box>
  );
};
export default SiteSetupModalPricingManagerment;
