import AddIcon from '@components/icons/Add';
import SiteList from '@components/SiteList';
import useHideScrollbar from '@hooks/useHideScrollbar';
import { Box } from '@material-ui/core';
import { WattAppState } from '@stores/index';
import React from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { TabContent } from '../TabContentTypes';
import { ButtonMap, SiteAndDeviceWrapper, WTabPanelWrapper } from './CardLayoutSidebar.styled';
import { WTab, WTabPanel, WTabs } from './Tab';

const CardLayoutSidebar = ({ appendContent, recivedTabName, handleOpenCloseSiteCreate }: { appendContent?: React.ReactNode; recivedTabName?: (tabName: string) => void; handleOpenCloseSiteCreate?: () => void }) => {
  const [value, setValue] = React.useState(0);
  const intl = useIntl();

  const { item } = useSelector((state: WattAppState) => state.user.me);

  useHideScrollbar({
    container: 'tabpanel-container',
    removeCSS: 'show-scrollbar',
  });

  const handleChange = (event: React.ChangeEvent<Record<string, unknown>>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box height="100%">
      <SiteAndDeviceWrapper position="relative" zIndex={3} width={400} height="100%" display="flex" flexDirection="column">
        <Box width="100%" display="flex" justifyContent="space-between" py={2} px={3} borderBottom="1px solid #d3d3d3">
          <Box display="flex" alignItems="center" width="100%">
            <WTabs
              disableRipple
              value={value}
              onChange={handleChange}
              aria-label="ant example"
              TabIndicatorProps={{
                style: {
                  display: 'none',
                },
              }}
            >
              <WTab
                label={intl.formatMessage({
                  id: 'dashboard_home_site_category',
                  defaultMessage: 'My Sites',
                })}
                onClick={() => recivedTabName?.(TabContent.YourSite)}
                disableSeperator
              />
            </WTabs>
            {!!item?.company && (
              <ButtonMap onClick={handleOpenCloseSiteCreate}>
                <AddIcon />
              </ButtonMap>
            )}
          </Box>
        </Box>
        <WTabPanelWrapper flexGrow="1" overflow="auto" id="tabpanel-container">
          <WTabPanel value={value} index={0}>
            <SiteList />
          </WTabPanel>
        </WTabPanelWrapper>
        {appendContent}
      </SiteAndDeviceWrapper>
    </Box>
  );
};

export default CardLayoutSidebar;
