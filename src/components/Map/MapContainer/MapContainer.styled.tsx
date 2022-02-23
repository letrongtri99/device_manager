import { Theme } from '@material-ui/core/styles/createMuiTheme';
import WButton from '@components/Controls/WButton';
import styled from '@emotion/styled';

interface Props {
  theme?: Theme;
}

export const SiteContainer = styled('div')<Props>(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  padding: `${theme.spacing(3.5)}px`,
  borderRadius: '10px',
  boxShadow: '0px 0px 13px 0px rgba(0, 0, 0, 0.12)',
}));

export const SiteDescription = styled('div')<Props>(({ theme }) => ({
  color: theme.palette.gray[100],
  margin: `${theme.spacing(2)}px 0px`,
}));

export const SiteActionButton = styled(WButton)<Props>(({ theme }) => ({
  color: theme.palette.black[100],
  fontWeight: 500,
  marginTop: `${theme.spacing(2.5)}px`,
}));

export const Title = styled('div')<Props>(({ theme }) => ({
  'font-size': '22px',
  'font-weight': '500',
  color: theme.palette.black[100],
}));

export const TitleRow = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Close = styled(WButton)<Props>(({ theme }) => ({
  marginRight: `-${theme.spacing(2.625)}px`,
}));
