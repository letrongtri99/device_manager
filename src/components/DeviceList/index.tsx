import { Box, MenuItem, Typography } from '@material-ui/core';
import React from 'react';
import DeviceItem, { DeviceItemProps } from './DeviceItem/index';
import { BootstrapInput, WSelectStyled } from './DeviceList.styled';

export interface DeviceListProps {
  data: DeviceItemProps[];
}

const DeviceList = ({ data = [] }: DeviceListProps) => {
  const [age, setAge] = React.useState<number>(1);

  return (
    <Box>
      <Box width="100%" display="flex" justifyContent="flex-start" ml={3}>
        <WSelectStyled
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={age}
          onChange={(e) => {
            setAge(Number(e.target.value));
          }}
          input={<BootstrapInput />}
          displayEmpty
        >
          <MenuItem value={1}>
            <Typography variant="caption">Name</Typography>
          </MenuItem>
          <MenuItem value={2}>
            <Typography variant="caption">Price</Typography>
          </MenuItem>
          <MenuItem value={3}>
            <Typography variant="caption">Date</Typography>
          </MenuItem>
        </WSelectStyled>
      </Box>
      {data.map((item) => (
        <DeviceItem key={item.deviceID} avatar={item.avatar} deviceID={item.deviceID} active={item.active} />
      ))}
    </Box>
  );
};

export default DeviceList;
