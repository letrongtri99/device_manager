import styled from '@emotion/styled';
import { Box } from '@material-ui/core';

export const WDropdownItemContainer = styled(Box)`
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.palette.background.default};
  }
`;
