import React, { useState } from 'react';
import { Box, Typography } from '@material-ui/core';
import CardLayoutSidebar from '@components/layouts/CardLayout/Sidebar.tsx';
import CardLayoutContent from '@components/layouts/CardLayout/Content.tsx';
import { useIntl } from 'react-intl';
import { TabContent } from './TabContentTypes';
import theme from '@styles/theme';
import Map from '@components/Map/MapContainer';

const CardLayout = () => {
  const [content, setContent] = useState<string>(TabContent.YourSite);
  const [isShowMap, setIsShowMap] = useState<boolean>(false);

  const handleOpenCloseSiteCreate = () => {
    setIsShowMap(!isShowMap);
  };

  const intl = useIntl();
  return (
    <Box height="100%" width="100%">
      {isShowMap ? (
        <Map handleOpenCloseSiteCreate={handleOpenCloseSiteCreate} />
      ) : (
        <Box
          position="relative"
          height="100%"
          width="100%"
          display="flex"
          gridGap={24}
        >
          <CardLayoutSidebar
            recivedTabName={setContent}
            handleOpenCloseSiteCreate={handleOpenCloseSiteCreate}
          />
          <CardLayoutContent
            cardLayoutContent={TabContent.YourSite}
            header={{ title: 'Flåterøpru' }}
          />
        </Box>
      )}
    </Box>
  );
};

/* {content === TabContent.YourSite
            ? (
              <CardLayoutContent cardLayoutContent={TabContent.YourSite} header={{ title: 'Flåterøpru' }} />
              )
            : (
            <CardLayoutContent
              cardLayoutContent={TabContent.Device}
              header={{
                title: 'Device ID 1234567890',
                subContent: (
                  <Box display="flex" alignItems="center" mt={-1}>
                    <Box width={8} height={8} bgcolor={theme.palette.green[100]} borderRadius={9999} mr={0.5} />
                    <Typography variant="caption">
                      {intl.formatMessage({
                        id: 'dashboard_home_site_detail_device_status_online',
                        defaultMessage: 'Online',
                      })}
                    </Typography>
                  </Box>
                ),
              }}
            />
              )} */

export default CardLayout;
