import { Box, Paper } from '@material-ui/core';
import styled from '@emotion/styled';

export const CardLayoutContentContentModalPaper = styled(Paper)`
  z-index: 10;
  position: absolute;
  top: -2px;
  left: 0;
  right: 0;
  bottom: 2px;
  display: block;
  box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.08);
  border-radius: ${({ theme }) => theme.spacing(0.5)}px;
  padding: ${({ theme }) => theme.spacing(3)}px;
  overflow-y: auto;
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
  /* padding-right: ${({ theme }) => theme.spacing(10)}px; */
`;
