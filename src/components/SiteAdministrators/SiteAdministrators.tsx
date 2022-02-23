import WAutoComplete from '@components/WAutoComplete';
import WAutoCompleteItemAdministratorAdd from '@components/WAutoComplete/WAutoCompleteItem/AdministratorAdd';
import { Box, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { NotFound, PopupStyled, SendInvitation } from './SiteAdministrators.styled';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
import { useIntl } from 'react-intl';

const SiteAdministrators = () => {
  const intl = useIntl();
  const [open, setOpen] = useState<boolean>(true);

  // TODO: remove soon
  const data = [
    {
      avatarUrl: '...',
      name: 'Lubomír Dvořák A',
      companyName: 'AS',
      phoneNumber: '1 467 24 452',
      email: 'thisisalongname@longmail.com',
    },
    {
      avatarUrl: '...',
      name: 'Lubomír Dvořák B',
      companyName: 'AA',
      phoneNumber: '2 467 24 451',
      email: 'thisisalongname@longmail.com',
    },
    {
      avatarUrl: '...',
      name: 'Lubomír Dvořák C',
      companyName: 'AB',
      phoneNumber: '3 467 24 450',
      email: 'thisisalongname@longmail.com',
    },
  ];

  return (
    <PopupStyled open={open} onClose={() => setOpen(false)}>
      <Box display="flex" flexDirection="column" height="80%">
        <Box width="100%" mb={1}>
          <Box mb={1}>
            <Typography variant="h4">{intl.formatMessage({ id: 'site_administrator_title', defaultMessage: 'Site Administrator' })}</Typography>
          </Box>
          <Typography variant="caption">{intl.formatMessage({ id: 'site_administrator_description', defaultMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ipsam at laborum ullam soluta eos fuga deserunt quam provident hic!' })}</Typography>
        </Box>
        <Box width="100%" marginLeft="auto" marginRight="auto" borderRadius={8}>
          <WAutoComplete
            options={data}
            emptyComponent={
              <Box display="flex" justifyContent="space-between" alignItems="center" onMouseDown={(e) => e.preventDefault()}>
                <NotFound>
                  {intl.formatMessage({
                    id: 'dashboard_home_site_admin_not_found',
                    defaultMessage: 'Update your profile with a picture',
                  })}
                </NotFound>
                <SendInvitation variant="text" onClick={() => console.log('a')}>
                  {intl.formatMessage({
                    id: 'dashboard_home_site_admin_send_invitation',
                    defaultMessage: 'Send an invitation',
                  })}
                </SendInvitation>
              </Box>
            }
            placeholder={intl.formatMessage({
              id: 'Enter a name, company name, email or mobile number',
              defaultMessage: 'Enter a name, company name, email or mobile number',
            })}
            filterOption={(options, inputValue) => options.filter((item) => (item.email && item.email.includes(inputValue)) || (item.phoneNumber && item.phoneNumber.includes(inputValue)) || (item.companyName && item.companyName.includes(inputValue)) || (item.name && item.name.includes(inputValue)))}
            renderOption={(item, inputValue) => {
              const entriesObject = Object.fromEntries(Object.entries(item).map(([key, val]) => [key, parse(((item as unknown) as { [name: string]: string })[key] || '', match(val || '', inputValue))]));
              return <WAutoCompleteItemAdministratorAdd data={entriesObject} />;
            }}
          />
        </Box>
      </Box>
    </PopupStyled>
  );
};

export default SiteAdministrators;
