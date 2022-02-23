import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8091e4',
      contrastText: ''
    },
    secondary: {
      main: '#b4beca',
      contrastText: ''
    },
    background: {
      default: '#f5f5f5'
    },
    blueGrey: {
      100: '#d8d8d8',
      500: '#8a9aad',
      300: '#b4beca'
    },
    common: {
      white: '#ffffff',
      black: '#333333'
    },
    black: {
      100: '#283039',
      200: '#bdbdcc'
    },
    blue: {
      100: '#55c9c4',
      200: '#91dcda',
      300: '#7fe3df'
    },
    gray: {
      100: '#9c9c9c',
      200: '#c2c2c2',
      300: '#f0f2f4',
      400: '#bdbdbd'
    },
    white: {
      100: '#bcbcbc',
      200: '#b8b8b8',
      300: '#d3d3d3',
      400: '#e6e6e6',
      500: '#fcfcfc'
    },
    yellow: {
      100: '#fff6db'
    },
    green: {
      100: '#91c996'
    },
    red: {
      100: '#bd3232'
    }
  },
  overrides: {
    MuiButton: {
      text: {
        textTransform: 'capitalize',
        fontFamily: 'SFProDisplay'
      },
      root: {
        borderRadius: 999,
        boxShadow: 'none',
        fontSize: 14,
        padding: '8px 20px',
        textTransform: 'none'
      },
      contained: {
        boxShadow: 'none',
        backgroundColor: '#F7F7F7',
        '&:hover': {
          boxShadow: 'none'
        }
      },
      containedSecondary: {
        color: '#FFF'
      },
      outlined: {
        padding: '8px 20px',
        borderColor: 'rgba(0, 0, 0, 0.26)'
      }
    },
    MuiTextField: {
      root: {
        fontFamily: 'SFProDisplay',
        height: 40,
        '& fieldset': {
          borderRadius: 20
        }
      }
    },
    MuiTypography: {
      caption: {
        fontSize: '14px',
        lineHeight: '20px',
        fontWeight: 'normal',
        color: 'rgb(156, 156, 156)',
        fontFamily: 'SFProDisplay'
      },
      subtitle1: {
        fontSize: '22px',
        fontWeight: 500,
        lineHeight: '40px',
        fontFamily: 'SFProDisplay'
      },
      subtitle2: {
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '26px',
        fontFamily: 'SFProDisplay'
      },
      h1: {
        fontSize: '32px',
        fontWeight: 500,
        lineHeight: '40px',
        fontFamily: 'SFProDisplay'
      },
      h2: {
        fontSize: '22px',
        fontWeight: 500,
        lineHeight: '28px',
        fontFamily: 'SFProDisplay'
      },
      h3: {
        fontSize: '20px',
        fontWeight: 500,
        lineHeight: '26px',
        fontFamily: 'SFProDisplay'
      },
      h4: {
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '26px',
        fontFamily: 'SFProDisplay'
      },
      h5: {
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '24px',
        fontFamily: 'SFProDisplay'
      },
      h6: {
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '22px',
        fontFamily: 'SFProDisplay'
      },
      body1: {
        fontSize: '16px',
        fontWeight: 300,
        lineHeight: '24px',
        fontFamily: 'SFProDisplay'
      },
      body2: {
        fontSize: '12px',
        fontWeight: 300,
        lineHeight: '16px',
        fontFamily: 'SFProDisplay'
      }
    },
    MuiFab: {
      sizeSmall: {
        width: '40px',
        height: '40px'
      }
    }
  }
});

export type CustomizedTheme = typeof theme;

declare module '@material-ui/core/styles/createPalette' {
  export interface Palette {
    blueGrey: ColorPartial;
    black: ColorPartial;
    blue: ColorPartial;
    gray: ColorPartial;
    white: ColorPartial;
    yellow: ColorPartial;
    green: ColorPartial;
    red: ColorPartial;
  }
  export interface PaletteOptions {
    blueGrey: ColorPartial;
    black: ColorPartial;
    blue: ColorPartial;
    gray: ColorPartial;
    white: ColorPartial;
    yellow: ColorPartial;
    green: ColorPartial;
    red: ColorPartial;
  }
}

declare module '@emotion/react' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends CustomizedTheme {}
}

export default theme;
