import WButton from '@components/Controls/WButton';
import { Grid } from '@material-ui/core';
import styled from '@emotion/styled';

interface Props {
  shouldShowSearchBar: boolean;
}

export const SiteSetupBillingAddBtn = styled(WButton)`
  height: ${({ theme }) => theme.spacing(7)}px;
  width: ${({ theme }) => theme.spacing(7)}px;
  padding: 0;
  min-width: auto;
`;

export const AlertTitle = styled('span')`
  color: ${({ theme }) => theme.palette.red[100]};
`;

export const RemoveClientButton = styled('img')`
  cursor: pointer;
`;

export const ContainerSearchBillingAdmin = styled(Grid)<Props>(
  ({ shouldShowSearchBar, theme }) => ({
    height: `${shouldShowSearchBar && '350px'}`,
    paddingRight: `${theme.spacing(2.5)}px`
  })
);
