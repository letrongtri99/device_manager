import styled from '@emotion/styled';
import { Box, Typography, IconButton } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

export const CategoryText = styled(Typography)``;

export const SiteAndDeviceWrapper = styled(Box)`
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.12);
  min-height: ${({ theme }) => theme.spacing(25)}px;
`;

export const HomeLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.palette.black[100]};
  opacity: 0.6;

  &.home-link__active {
    color: ${({ theme }) => theme.palette.black[100]};
    opacity: 1;
  }
  &.home-link__text {
  }
  &:hover,
  &:active,
  &:visited {
    color: ${({ theme }) => theme.palette.black[100]};
  }
`;

export const ButtonWrapper = styled(Box)`
  filter: blur(3px);
`;

export const ButtonMap = styled(IconButton)`
  position: absolute;
  right: 8px;
`;

export const WTabPanelWrapper = styled(Box)`
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.spacing(1)}px;
    background: transparent;
  }
  &.show-scrollbar::-webkit-scrollbar {
    width: ${({ theme }) => theme.spacing(1)}px;
    background: ${({ theme }) => theme.palette.grey[300]};
  }
  &.show-scrollbar::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.palette.grey[400]};
  }
`;
