import { Select, withStyles, InputBase } from '@material-ui/core';

export const WSelectStyled = withStyles((theme) => ({
  select: { paddingRight: `${theme.spacing(8)}px !important` },
}))(Select);

export const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    outline: 'none',
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: 'none',
    fontSize: 16,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&:focus': {
      outline: 'none',
      border: 'none',
    },
  },
}))(InputBase);
