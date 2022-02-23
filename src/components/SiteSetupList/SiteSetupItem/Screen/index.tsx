import WButton from '@components/Controls/WButton';
import DarkIcon from '@components/icons/Dark';
import FignerIcon from '@components/icons/Finger';
import IdeaIcon from '@components/icons/Idea';
import LightIcon from '@components/icons/Light';
import RenewIcon from '@components/icons/Renew';
import WDropdown from '@components/WDropdown';
import WDropdownItem from '@components/WDropdown/WDropdownItem';
import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { useIntl } from 'react-intl';

const SiteSetupItemScreen = () => {
  const intl = useIntl();

  return (
    <Box display="flex" gridGap={20} alignItems="flex-start">
      <WDropdown value="2" onSelectValue={(val) => console.log(val)}>
        <WDropdownItem value="1">
          <Box display="flex" alignItems="center" gridGap={20}>
            <RenewIcon />
            <Typography variant="h6">
              {intl.formatMessage({
                id: 'auto_screen_mode',
                defaultMessage: 'Auto Screen Mode',
              })}
            </Typography>
          </Box>
        </WDropdownItem>
        <WDropdownItem value="2">
          <Box display="flex" alignItems="center" gridGap={20}>
            <LightIcon />
            <Typography variant="h6">
              {intl.formatMessage({
                id: 'light_screen_mode',
                defaultMessage: 'Light Screen Mode',
              })}
            </Typography>
          </Box>
        </WDropdownItem>
        <WDropdownItem value="3">
          <Box display="flex" alignItems="center" gridGap={20}>
            <DarkIcon />
            <Typography variant="h6">
              {intl.formatMessage({
                id: 'dark_screen_mode',
                defaultMessage: 'Dark Screen Mode',
              })}
            </Typography>
          </Box>
        </WDropdownItem>
      </WDropdown>
      <WButton variant="contained" color="secondary" startIcon={<IdeaIcon />}>
        {intl.formatMessage({
          id: 'auto_awake_screen',
          defaultMessage: 'Auto Awake screen',
        })}
      </WButton>
      <WButton variant="outlined" color="secondary" startIcon={<FignerIcon />}>
        {intl.formatMessage({
          id: 'tap_to_wake_screen',
          defaultMessage: 'Auto Awake screen',
        })}
      </WButton>
    </Box>
  );
};

export default SiteSetupItemScreen;
