import styled from '@emotion/styled';
import { Box, Button } from '@material-ui/core';
import WButton from '@components/Controls/WButton';

export const PortItem = styled(Box)`
  background-color: ${({ theme }) => theme.palette.grey[100]};
  max-height: ${({ theme }) => theme.spacing(5)}px;
  border-radius: ${({ theme }) => theme.spacing(1)}px;
`;

export const ButtonItem = styled(Button)<{ active?: boolean }>`
  ${({ active, theme }) =>
    active
      ? `
        background-color: ${theme.palette.blueGrey[300]};
        color: ${theme.palette.common.white};
        border-color: transparent;
        &:hover {
            background: ${theme.palette.blueGrey[300]};
            box-shadow: 2px 2px 5px lightgray;
        }
    `
      : `
    background-color: ${theme.palette.common.white};
        color: ${theme.palette.blueGrey[300]};
        border-color: ${theme.palette.blueGrey[300]} ;
        &:hover {
            box-shadow: 2px 2px 5px lightgray;
        }
    `};

  border-radius: ${({ theme }) => theme.spacing(2.5)}px;
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.spacing(1.7)}px;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  margin-right: ${({ theme }) => theme.spacing(2.5)}px;
`;

export const WButtonStyled = styled(WButton)<{ active?: boolean }>`
  ${({ active, theme }) =>
    active
      ? `
        background-color: ${theme.palette.blueGrey[300]};
        color: ${theme.palette.common.white};
        border-color: transparent;
        &:hover {
            background: ${theme.palette.blueGrey[300]};
            box-shadow: 2px 2px 5px lightgray;
        }
    `
      : `
    background-color: ${theme.palette.common.white};
        color: ${theme.palette.blueGrey[300]};
        border-color: ${theme.palette.blueGrey[300]} ;
    `};

  text-transform: capitalize;
  font-size: ${({ theme }) => theme.spacing(1.7)}px;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  margin-right: ${({ theme }) => theme.spacing(2.5)}px;
`;
