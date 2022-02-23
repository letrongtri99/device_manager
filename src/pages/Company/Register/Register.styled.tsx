import WButton from '@components/Controls/WButton';
import WTextField from '@components/WTextField';
import styled from '@emotion/styled';
import { Box } from '@material-ui/core';
import theme from '@styles/theme';

interface Props {
  kind?: string;
  submit?: boolean;
}

export const RegisterContainer = styled(Box)`
  margin-top: -${({ theme }) => theme.spacing(6.25)}px;
`;

export const FormContainer = styled('form')`
  margin: 0 auto;
`;

export const RegisterInput = styled(WTextField)(() => ({
  marginBottom: `${theme.spacing(1.25)}px`,
}));

export const SubmitContainer = styled('div')`
  margin-top: ${theme.spacing(5.625)}px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const SubmitButton = styled(WButton)(({ submit }: Props) => ({
  padding: 0,
  float: submit ? 'right' : 'left',
  border: 'none',
  background: 'none',
  outline: 'none',
  cursor: 'pointer',
  '&:disabled': {
    cursor: 'auto',
  },
}));
