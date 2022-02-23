import styled from '@emotion/styled';
import { Button, ButtonProps } from '@material-ui/core';

export const WButtonShortLineBottom = styled(Button)<ButtonProps & { loading?: boolean }>`
  padding: 0;
  padding-bottom: ${({ theme }) => theme.spacing(0.5)}px;
  min-width: auto;
  &.Mui-disabled {
    &:after {
      background-color: rgba(0, 0, 0, 0.26);
    }
  }
  &:hover {
    background-color: transparent;
    opacity: 0.8;
  }
  &:after {
    content: '';
    height: 2px;
    width: ${({ theme }) => theme.spacing(1)}px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.palette.black[100]};
    ${({ loading }) => loading && 'animation: example 3s linear infinite alternate'};
  }

  @keyframes example {
    from {
      width :  ${({ theme }) => theme.spacing(1)}px;
    }
    to {
      width: 100%;
    }
  }
`;
