import styled from '@emotion/styled';
import { Box } from '@material-ui/core';

export const DotStep = styled(Box)<{ $isActive?: boolean }>`
  height: 12px;
  width: 12px;
  border-radius: 6px;
  background-color: ${({ theme, $isActive }) =>
    theme.palette.blueGrey[$isActive ? 500 : 100]};
`;

export const HorizontalLine = styled(Box)<{ $isActive?: boolean }>`
  height: 1px;
  width: 18px;
  background-color: ${({ theme, $isActive }) =>
    theme.palette.blueGrey[$isActive ? 500 : 100]};
`;
