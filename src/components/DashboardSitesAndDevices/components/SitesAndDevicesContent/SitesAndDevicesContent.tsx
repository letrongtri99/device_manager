import React from 'react';
import { Grid, CardHeader, Avatar } from '@material-ui/core';
import { CardSite } from './SitesAndDevicesContent.styled';
import times from 'lodash/times';

const SitesAndDevicesContent: React.FC<{}> = ({}) => {
  return (
    <Grid>
      {times(24, (item) => (
        <CardSite>
          <CardHeader
            avatar={<Avatar>C</Avatar>}
            title="Samsou"
            subheader="Samsou description..."
          />
        </CardSite>
      ))}
    </Grid>
  );
};
export default SitesAndDevicesContent;
