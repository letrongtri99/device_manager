import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { CompanyDescriptonText, WAutoCompleteWrapper } from './CompanySearch.styled';
import { useIntl } from 'react-intl';
import WAutoComplete from '@components/WAutoComplete';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import CompanyItem from './CompanyItem';
import { RegisterStatus } from '@pages/authentication/Register';
export interface CompanySearchProps {
  setStep: (step: number) => void;
}

const CompanySearch = ({ setStep }: CompanySearchProps) => {
  const intl = useIntl();

  // TODO: remove soon
  const data = [
    {
      companyName: 'Bergen Construction AS',
      phoneNumber: '5498456123',
    },
    {
      companyName: 'Bergen Kommune',
      phoneNumber: '5498456123',
    },
    {
      companyName: 'Bergen Kommune',
      phoneNumber: '5498456123',
    },
    {
      companyName: 'Bergen Kommune',
      phoneNumber: '5498456123',
    },
    {
      companyName: 'Bergen Construction AS',
      phoneNumber: '5498456123',
    },
    {
      companyName: 'Bergen Construction AS',
      phoneNumber: '5498456123',
    },
    {
      companyName: 'Bergen Construction AS',
      phoneNumber: '5498456123',
    },
    {
      companyName: 'Bergen Construction AS',
      phoneNumber: '5498456123',
    },
  ];

  return (
    <Box width="100%" height="100%">
      <Box display="flex" flexDirection="column">
        <Typography variant="h2" align="center">
          {intl.formatMessage({ id: 'register_company_title', defaultMessage: 'Register company' })}
        </Typography>
        <CompanyDescriptonText variant="caption" align="center">
          {intl.formatMessage({ id: 'register_company_description', defaultMessage: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' })}
        </CompanyDescriptonText>
        <WAutoCompleteWrapper display="flex" flexDirection="column" justifyContent="space-between">
          <WAutoComplete
            options={data}
            emptyComponent={
              <Box display="flex" justifyContent="space-between" alignItems="center" onMouseDown={(e) => e.preventDefault()}>
                Not Found
              </Box>
            }
            placeholder={intl.formatMessage({
              id: 'Enter a name, company name, email or mobile number',
              defaultMessage: 'Enter a name, company name, email or mobile number',
            })}
            filterOption={(options, inputValue) => options.filter((item) => (item.companyName && item.companyName.includes(inputValue)) || (item.phoneNumber && item.phoneNumber.includes(inputValue)))}
            renderOption={(item, inputValue) => {
              const entriesObject = Object.fromEntries(Object.entries(item).map(([key, val]) => [key, parse(((item as unknown) as { [name: string]: string })[key] || '', match(val || '', inputValue))]));
              return (
                <CompanyItem
                  onItemClick={() => {
                    setStep(RegisterStatus.EnterInfomationCompany);
                  }}
                  data={entriesObject}
                />
              );
            }}
          />
        </WAutoCompleteWrapper>
      </Box>
    </Box>
  );
};

export default CompanySearch;
