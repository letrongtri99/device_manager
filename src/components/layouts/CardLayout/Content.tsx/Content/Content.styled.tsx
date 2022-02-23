import styled from '@emotion/styled';
import theme from '@styles/theme';
import { Box, Button, Select, InputBase, MenuItem } from '@material-ui/core';
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
        border-color: ${theme.palette.blueGrey[300]} ;`};

  text-transform: capitalize;
  font-size: ${({ theme }) => theme.spacing(1.7)}px;
  font-weight: ${({ theme }) => theme.typography.fontWeightRegular};
  margin-right: ${({ theme }) => theme.spacing(2.5)}px;
`;

export const MapImage = styled.img`
  width: 100%;
  max-height: ${({ theme }) => theme.spacing(18)}px;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.spacing(1)}px;
`;

export const BootstrapInput = styled(InputBase)`
  .MuiInputBase-input {
    border-radius: 15px;
    border: 1px solid rgb(211, 211, 211);
    font-size: 14px;
    padding: ${theme?.spacing(0.875)}px ${theme?.spacing(2.5625)}px;
    line-height: 16px;
    transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:focus {
      border-radius: 15px;
      border-color: #80bdff;
      box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
    }
  }
`;

export const StyledSelection = styled(Select)`
  .MuiSelect-select {
    padding-right: ${theme?.spacing(2.5625)}px;
  }
  .MuiSelect-icon {
    display: none;
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  justify-content: space-between;
  width: 122px;
`;

export const ButtonReset = styled(Button)`
  background: #B4BECA;
  border-radius: 20px;
  width: 120px;
  height: 21px;
  padding: ${theme?.spacing(0)}px;
  font-weight: 500;
  font-size: 11px;
  line-height: 13px;
  color: #FFFFFF;
  align-self: center;

  &:hover {
    background-color: #B4BECA;
  }

  &:active {
    box-shadow: none;
  }
`;

