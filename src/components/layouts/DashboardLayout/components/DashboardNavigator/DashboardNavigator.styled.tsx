import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Box } from '@material-ui/core';

export const DashboardNavigatorWapper = styled(Box)`
  width: ${({ theme }) => theme.spacing(22)}px;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export const NavigatorLink = styled(NavLink)`
  text-decoration: none;
  opacity: 0.3;

  &.navigator-link__active {
    opacity: 1;
  }

  &.navigator-link__active .navlinktext {
    color: ${({ theme }) => theme.palette.black[100]};
  }

  &.navigator-link .navlinktext {
    color: ${({ theme }) => theme.palette.black[100]};
    opacity: 0.6;
  }

  &.navigator-link__active .navlinktext {
    opacity: 1;
  }

  &.navigator-link__active,
  &.navigator-link__active:hover,
  &.navigator-link__active:active {
    color: ${({ theme }) => theme.palette.black[100]};
  }
`;
