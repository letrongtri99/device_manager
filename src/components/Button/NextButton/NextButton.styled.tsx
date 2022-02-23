import styled from '@emotion/styled';
import { Divider } from '@material-ui/core';

interface Props {
  submit?: boolean;
}

export const SubmitButton = styled('button')(({ submit }: Props) => ({
  float: submit ? 'right' : 'left',
  border: 'none',
  background: 'none',
  fontSize: '16px',
  outline: 'none',
  cursor: 'pointer',
  '&:disabled': {
    cursor: 'auto',
  },
}));

export const SubmitButtonDivider = styled(Divider)`
  width: 10px;
  margin-top: ${({ theme }) => theme.spacing(0.625)}px;
  background-color: ${({ theme }) => theme.palette.black[100]};
  height: 2px;
  margin-left: ${({ theme }) => theme.spacing(0.125)}px;
`;
