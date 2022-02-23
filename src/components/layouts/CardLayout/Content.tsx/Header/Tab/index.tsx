import Box from '@material-ui/core/Box';
import Tab from '@material-ui/core/Tab';
import React, { useState } from 'react';
import {
  CardLayoutContentHeaderTabAppBar,
  CardLayoutContentHeaderTabContainer,
  CardLayoutContentHeaderTabItem
} from './CardLayoutContentHeaderTab.styled';
import { useIntl } from 'react-intl';

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`
  };
}

export enum HeaderTab {
  Site = 'Site',
  Devices = 'Devices'
}

const CardLayoutContentHeaderTab = ({
  getCurrentTab
}: {
  getCurrentTab?: (p: HeaderTab) => void;
}) => {
  const intl = useIntl();
  const [value, setValue] = useState(0);

  const handleChange = (
    event: React.ChangeEvent<Record<string, unknown>>,
    newValue: number
  ) => {
    setValue(newValue);
    getCurrentTab?.(newValue === 0 ? HeaderTab.Site : HeaderTab.Devices);
  };

  return (
    <Box>
      <CardLayoutContentHeaderTabAppBar position="static">
        <CardLayoutContentHeaderTabContainer
          value={value}
          onChange={handleChange}
          variant="fullWidth"
        >
          <CardLayoutContentHeaderTabItem
            disableRipple
            label={intl.formatMessage({
              id: 'site_details',
              defaultMessage: 'Site Details'
            })}
            {...a11yProps(0)}
          />
          <CardLayoutContentHeaderTabItem
            disableRipple
            label={intl.formatMessage({
              id: 'linked_devices',
              defaultMessage: 'Linked devices'
            })}
            {...a11yProps(1)}
          />
        </CardLayoutContentHeaderTabContainer>
      </CardLayoutContentHeaderTabAppBar>
    </Box>
  );
};

export default CardLayoutContentHeaderTab;
