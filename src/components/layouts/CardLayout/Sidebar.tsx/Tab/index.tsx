import { Box, Tabs, Typography } from '@material-ui/core';
import theme from '@styles/theme';
import React, { ReactNode } from 'react';
import { StyledTab } from './Tab.styled';

interface StyledTabProps {
  label: ReactNode;
  disableSeperator?: boolean;
  onClick?: () => void;
}
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const WTabLabel = ({ label, disableSeperator }: StyledTabProps) => {
  return (
    <Box display="flex" alignItems="center">
      <Typography variant="subtitle1">{label}</Typography>
      {!disableSeperator && <Box height={4} width={4} bgcolor={theme.palette.gray[100]} borderRadius={999} ml={2} />}
    </Box>
  );
};

export const WTabs = Tabs;

export const WTab = (props: StyledTabProps) => {
  return <StyledTab disableRipple {...props} label={<WTabLabel label={props.label as string} disableSeperator={props.disableSeperator} />} />;
};

export const WTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Box role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box>{children}</Box>}
    </Box>
  );
};
