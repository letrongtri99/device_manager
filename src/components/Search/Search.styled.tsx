import styled from '@emotion/styled';
import { Divider } from '@material-ui/core';
import theme from '@styles/theme';

interface Props {
  value?: string;
  kind?: string;
}

export const ContainerSearch = styled('div')(({ kind }: Props) => ({
  display: 'flex',
  width: `${kind === 'employee' ? '100%' : '510px'}`,
  margin: '0 auto',
  justifyContent: `${kind === 'employee' ? 'left' : 'center'}`,
  padding: `${theme?.spacing(2)}px ${theme?.spacing(2)}px`,
}));

export const ContainerSearchList = styled('div')(({ value, kind }: Props) => ({
  background: `${value ? 'rgb(255, 255, 255)' : 'none'}`,
  borderRadius: `${value ? '9px' : '0px'}`,
  boxShadow: `${value ? '0px 0px 18px 0px rgba(0, 0, 0, 0.09)' : 'none'}`,
  width: `${kind === 'employee' ? '101%' : '520px'}`,
  margin: '0 auto',
}));

export const SearchIcon = styled('img')(({ value, kind }: Props) => ({
  width: '24px',
  height: '24px',
  cursor: `${value ? 'pointer' : ''}`,
  marginLeft: `${kind === 'employee' && !value && '1px'}`,
}));

export const SearchInput = styled('input')`
  color: ${theme.palette.black[100]};
  font-size: 14px;
  font-weight: 300;
  height: 23px;
  line-height: 23px;
  width: 100%;
  border: none;
  outline: none;
  ::placeholder {
    color: ${theme.palette.gray[200]};
  }
  padding-top: ${theme.spacing(0.625)}px;
`;

export const BottomInput = styled(Divider)`
  width: 486px;
  margin: ${theme.spacing(1)}px auto;
`;
