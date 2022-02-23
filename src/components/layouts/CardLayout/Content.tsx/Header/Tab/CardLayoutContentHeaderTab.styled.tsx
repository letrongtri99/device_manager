import styled from '@emotion/styled';
import { AppBar, Tabs, Tab } from '@material-ui/core';

export const CardLayoutContentHeaderTabAppBar = styled(AppBar)`
  box-shadow: none;
  background-color: transparent;
`;

export const CardLayoutContentHeaderTabContainer = styled(Tabs)`
  background-color: ${({ theme }) => theme.palette.gray[300]};
  border: 2px solid ${({ theme }) => theme.palette.gray[300]};
  border-radius: 999px;
  min-height: ${({ theme }) => theme.spacing(4)}px;
  .MuiPaper-root {
    box-shadow: none;
  }
  .MuiButtonBase-root {
    z-index: 1;
  }
  .MuiTabs-indicator {
    height: 100%;
    z-index: 0;
    border-radius: 999px;
    background-color: ${({ theme }) => theme.palette.common.white};
  }
`;

export const CardLayoutContentHeaderTabItem = styled(Tab)`
  text-transform: none;
  font-size: ${({ theme }) => theme.spacing(12 / 8)}px;
  min-height: auto;
`;
