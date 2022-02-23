import styled from '@emotion/styled';
import { Tab } from '@material-ui/core';

export const StyledTab = styled(Tab)`
  text-transform: none;
  min-width: ${({ theme }) => theme.spacing(9)}px;
  padding-left: 0;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  &:hover {
    color: ${({ theme }) => theme.palette.gray[500]};
    opacity: 1;
  }
  &.Mui-selected {
    color: ${({ theme }) => theme.palette.gray[500]};
    font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  }
  &:focus {
    color: ${({ theme }) => theme.palette.gray[500]};
  }
`;
