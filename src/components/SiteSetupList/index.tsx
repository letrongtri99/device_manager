import AccountIcon from '@components/icons/Account';
import AodIcon from '@components/icons/Aod';
import BillingAdminIcon from '@components/icons/BillingAdmin';
import CreditCardIcon from '@components/icons/CreditCard';
import DeviceIcon from '@components/icons/Device';
import { Box } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { useIntl } from 'react-intl';
import SiteSetupItemHeader from './shared';
import SiteSetupItemAccess from './SiteSetupItem/Access';
import SiteSetupItemBilling from './SiteSetupItem/Billing';
import SiteSetupItemDevice from './SiteSetupItem/Device';
import SiteSetupItemPricing from './SiteSetupItem/Pricing';
import SiteSetupItemScreen from './SiteSetupItem/Screen/index';
import {
  SiteSetupListAccordion,
  SiteSetupListAccordionDetails,
  SiteSetupListAccordionSummary
} from './SiteSetupList.styled';

const SiteSetupList = () => {
  const intl = useIntl();

  const data = [
    {
      icon: <CreditCardIcon />,
      title: intl.formatMessage({
        id: 'dashboard_home_site_detail_item_title_pricing',
        defaultMessage: 'Pricing'
      }),
      subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: <SiteSetupItemPricing />
    },
    {
      icon: <BillingAdminIcon />,
      title: intl.formatMessage({
        id: 'billing_administrator',
        defaultMessage: 'Billing Administrator'
      }),
      subTitle: intl.formatMessage({
        id: 'subtitle_sitebilling',
        defaultMessage:
          'Assign a person responsible for site billing and to which company power bills should be sent'
      }),
      content: <SiteSetupItemBilling />
    },
    {
      icon: <AccountIcon />,
      title: intl.formatMessage({
        id: 'restricted_charger_access',
        defaultMessage: 'Restricted Charger Access'
      }),
      subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: <SiteSetupItemAccess />
    },
    {
      icon: <DeviceIcon />,
      title: intl.formatMessage({
        id: 'dashboard_home_site_detail_item_title_device_management',
        defaultMessage: 'Device Management'
      }),
      subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: <SiteSetupItemDevice />
    },
    {
      icon: <AodIcon />,
      title: intl.formatMessage({
        id: 'screen_management',
        defaultMessage: 'Screen Management'
      }),
      subTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      content: <SiteSetupItemScreen />
    }
  ];

  return (
    <>
      <Box>
        {data.map((item, index) => (
          <SiteSetupListAccordion
            TransitionProps={{ unmountOnExit: true }}
            key={index}
            square
          >
            <SiteSetupListAccordionSummary expandIcon={<ExpandMoreIcon />}>
              <SiteSetupItemHeader
                key={index}
                icon={item.icon}
                title={item.title}
                subTitle={item.subTitle}
              />
            </SiteSetupListAccordionSummary>
            <SiteSetupListAccordionDetails>
              {item.content}
            </SiteSetupListAccordionDetails>
          </SiteSetupListAccordion>
        ))}
      </Box>
    </>
  );
};

export default SiteSetupList;
