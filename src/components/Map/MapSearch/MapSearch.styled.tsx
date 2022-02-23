import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { Suggestion } from 'use-places-autocomplete';
import SearchIcon from '@material-ui/icons/Search';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { Divider } from '@material-ui/core';
import styled from '@emotion/styled';

interface Props {
  value?: string;
  data?: Suggestion[];
  highlight?: boolean;
  theme?: Theme;
}

export const SearchContainer = styled('div')(({ theme }: Props) => ({
  position: 'absolute',
  top: `${theme?.spacing(15.65)}px`,
  zIndex: 1,
  left: `${theme?.spacing(5.625)}px`,
  background: 'rgb(255, 255, 255)',
  boxShadow: '0px 0px 13px 0px rgba(0, 0, 0, 0.06)',
  borderRadius: '20px',
  width: '335px',
}));

export const InputText = styled('input')`
  width: 76%;
  height: 40px;
  border: none;
  outline: none;
  font-size: 14px;
  margin-left: ${({ theme }) => theme.spacing(0.25)}px;
`;

export const OptionList = styled('div')(({ data, theme }: Props) => ({
  paddingBottom: `${
    data && data.length > 0
      ? `${theme?.spacing(1.25)}px`
      : `${theme?.spacing(0)}px`
  }`,
}));

export const OptionItem = styled('span')(({ highlight, theme }: Props) => ({
  cursor: 'pointer',
  margin: `${theme?.spacing(1)}px`,
  width: '95%',
  'font-weight': `${highlight ? 'bold' : 'normal'}`,
}));

export const InputIconSearch = styled(SearchIcon)(
  ({ value, theme }: Props) => ({
    paddingTop: `${theme?.spacing(1.125)}px`,
    paddingLeft: `${theme?.spacing(0.75)}px`,
    width: '9% !important',
    height: '100% !important',
    color: `${
      value === '' ? theme?.palette.black[200] : theme?.palette.black[100]
    }`,
  }),
);

export const InputIconClear = styled(HighlightOffIcon)`
  width: 12% !important;
  padding-top: ${({ theme }) => theme.spacing(1.5)}px;
  padding-left: ${({ theme }) => theme.spacing(2.75)}px;
  height: 100% !important;
  cursor: pointer;
`;

export const Container = styled('div')`
  display: flex;
`;

export const OptionPlaceIcon = styled('img')`
  width: 26px;
  height: 25px;
  padding-left: ${({ theme }) => theme.spacing(0.75)}px;
  padding-top: ${({ theme }) => theme.spacing(1.375)}px;
`;

export const BottomSearch = styled(Divider)`
  width: 94%;
  margin: 0 auto;
`;
