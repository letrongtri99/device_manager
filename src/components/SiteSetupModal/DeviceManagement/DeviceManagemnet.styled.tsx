import styled from '@emotion/styled';
import { TextField, TextFieldProps } from '@material-ui/core';

export const SiteSetupModalDeviceManagementInput = styled(TextField)<TextFieldProps>(({ theme }) => ({
  height: 'auto',
  input: {
    height: theme.spacing(5),
    width: theme.spacing(8),
    padding: `0 ${theme.spacing(1)}px`,
    textAlign: 'center',
  },
  fieldset: {
    borderRadius: 999,
  },
}));
