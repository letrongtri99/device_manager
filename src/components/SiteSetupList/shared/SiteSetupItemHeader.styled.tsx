import styled from '@emotion/styled';
import { Box, Typography } from '@material-ui/core';

interface SiteSetupItemContainerProps {
  active?: boolean;
}

export const SiteSetupItemContainer = styled(Box)<SiteSetupItemContainerProps>``;

export const SiteSetupItemSubtitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.grey[500]};
`;
