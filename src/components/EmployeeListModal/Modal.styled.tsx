import Popup from '@components/Popup/Popup';
import styled from '@emotion/styled';
import theme from '@styles/theme';
import { Avatar, Select, InputBase, Box, MenuItem, IconButton, BoxProps, Typography } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

interface Props {
  theme?: Theme;
  position?: boolean;
  isInvitation?: boolean;
}

export const Modal = styled(Popup)`
  .popup-wrapper {
    max-width: 44%;
    overflow-y: auto;
  }
`;

export const EmployeeAvatar = styled(Avatar)(({ isInvitation, theme }: Props) => ({
  width: '50px',
  height: '50px',
  backgroundColor: isInvitation ? theme?.palette.common.white : theme?.palette.gray[400],
  borderRadius: '35px',
  border: `1px solid ${theme?.palette.white[400]}`,
}));

export const EmployeeAvatarisInvitationIcon = styled(AccountCircleIcon)(({ theme }) => ({
  color: theme.palette.black[100],
}));

export const SubTitle = styled('div')(({ theme }) => ({
  width: '90%',
  marginTop: `${theme.spacing(1.875)}px`,
  marginBottom: `${theme.spacing(1.875)}px`,
  color: theme.palette.gray[100],
}));

export const ButtonRightContainer = styled('div')(() => ({
  display: 'flex',
  marginLeft: 'auto',
}));

export const EmployeeItem = styled(Box)(({ theme, isInvitation }: Props & BoxProps) => ({
  display: 'flex',
  alignItems: 'center',
  height: '80px',
  backgroundColor: isInvitation ? theme?.palette.white[500] : theme?.palette.common.white,
}));

export const EmployeeDetailContainer = styled('div')(({ theme }) => ({
  marginLeft: `${theme.spacing(1.25)}px`,
  paddingTop: `${theme.spacing(0.75)}px`,
}));

export const EmployeeName = styled('div')`
  font-weight: bold;
`;

export const EmployeePhone = styled(Typography)`
  color: ${({ theme }) => theme.palette.black[100]};
`;

export const ButtonClose = styled('img')(({ theme }) => ({
  cursor: 'pointer',
  marginLeft: theme?.spacing(3) + 'px',
}));

export const ButtonRole = styled(Box)(({ theme, position }: Props & BoxProps) => ({
  backgroundColor: position ? theme?.palette.secondary.main : theme?.palette.common.white,
  borderRadius: '999px',
  color: position ? theme?.palette.common.white : theme?.palette.white[200],
  padding: `${theme?.spacing(0.87)}px ${theme?.spacing(2)}px`,
  minWidth: theme?.spacing(10) + 'px',
  textAlign: 'center',
  border: `1px solid ${position ? theme?.palette.secondary.main : theme?.palette.white[300]}`,
  fontSize: theme?.spacing(14 / 8) + 'px',
}));

export const BoxAction = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme?.spacing(3.75)}px ${theme?.spacing(2)}px;
`;

export const ContainerOption = styled('div')`
  font-size: 14px;
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

export const StyledIcon = styled(IconButton)`
  padding: 0;
  &:hover {
    background-color: ${theme?.palette.white};
  }
`;
