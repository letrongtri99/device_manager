import styled from '@emotion/styled';
import { Box, BoxProps } from '@material-ui/core';

export const WDropdownContainer = styled<React.ComponentType<BoxProps & { ref?: unknown }>>(Box)`
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

export const WDropdownValue = styled(Box)`
  cursor: pointer;
`;

export const WDropdownOptionsContainer = styled(Box)`
  border-top: 1px solid ${({ theme }) => theme.palette.background.default};
`;
