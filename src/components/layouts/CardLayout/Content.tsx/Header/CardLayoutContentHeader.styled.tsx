import styled from '@emotion/styled';
import { Box, Typography, IconButton } from '@material-ui/core';

export const CardLayoutContentHeaderContainer = styled(Box)`
  border-bottom: 1px solid ${({ theme }) => theme.palette.gray[300]};
`;

export const CardLayoutContentHeaderSubtitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.grey[400]};
`;

export const CardLayoutContentHeaderButton = styled(IconButton)`
  padding: 0;
`;
