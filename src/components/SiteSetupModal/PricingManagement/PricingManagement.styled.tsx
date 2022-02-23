import styled from '@emotion/styled';
import WButton from '@components/Controls/WButton';
import { TextField, Typography, FormControl } from '@material-ui/core';

interface Props {
  right?: boolean | undefined;
  failed?: boolean;
  clear?: boolean;
}

export const PayButton = styled(WButton)(({ theme }) => ({
  backgroundColor: theme.palette.blueGrey[300],
  borderColor: theme.palette.blueGrey[300],
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.blueGrey[300]
  }
}));

export const AlertButton = styled(WButton)<Props>(({ theme, clear }) => ({
  width: clear ? '10%' : '93%',
  justifyContent: 'left',
  color: `${theme.palette.black[100]}!important`
}));

export const InputDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.gray[100]
}));

export const Unit = styled(Typography)<Props>(({ theme, right }) => ({
  color: theme.palette.gray[100],
  marginLeft: `${theme.spacing(2.25)}px`,
  paddingTop: `${theme.spacing(0.875)}px`,
  fontStyle: `${right && 'italic'}`,
  marginRight: `${right && '20'}px`
}));

export const InputValue = styled(TextField)<Props>(
  ({ theme, right, failed }) => ({
    width: right ? '13%' : '18%',
    input: {
      color: failed ? theme.palette.gray[100] : theme.palette.black[100],
      textAlign: 'center'
    }
  })
);

export const SelectBox = styled(FormControl)(({ theme }) => ({
  marginLeft: `${theme.spacing(3.125)}px`,
  paddingTop: `${theme.spacing(0.5)}px`,
  '& .MuiInput-underline:before': {
    borderBottom: 'none'
  },
  '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
    borderBottom: 'none'
  },
  '& .MuiInput-root': {
    color: theme.palette.gray[100]
  }
}));
