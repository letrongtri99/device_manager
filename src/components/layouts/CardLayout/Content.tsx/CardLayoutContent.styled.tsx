import styled from '@emotion/styled';
import { Box } from '@material-ui/core';

export const ContentContainer = styled(Box)`
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.12);
  overflow-x: hidden;
  width: 100%;
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
