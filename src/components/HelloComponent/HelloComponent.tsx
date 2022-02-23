import { css } from '@emotion/react';
import React from 'react';
import { Typography } from '@material-ui/core';
import { CustomizedTheme } from '@styles/theme';

interface Props {
  title: string;
}

const HelloComponent: React.FC<Props> = ({ title }) => {
  return (
    <Typography
      variant="h1"
      css={(theme: CustomizedTheme) => css`
        color: ${theme.palette.error.main};
      `}
    >
      {title}
    </Typography>
  );
};

export default HelloComponent;
