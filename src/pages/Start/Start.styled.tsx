import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import theme from '@styles/theme';

export const StartLink = styled(Link)`
  text-decoration: none;
  color: ${theme.palette.black[100]};
`;

export const Login = styled(Typography)`
  margin-top: ${theme.spacing(7.25)}px;
`;
