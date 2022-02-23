import { Fab } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import styled from '@emotion/styled';

interface Props {
  kind?: 'zoom_in' | 'zoom_out' | 'undo';
}
export const ButtonConfig = styled(Fab)<Props>(({ kind, theme }) => ({
  position: 'absolute',
  bottom: `${theme.spacing(0)}px`,
  right: kind === 'zoom_in' ? '110px' : kind === 'zoom_out' ? '50px' : '170px',
  marginBottom: '30px',
  backgroundColor: theme?.palette.common.white
}));

export const ButtonDraw = styled(Fab)<Props>(({ kind, theme }) => ({
  position: 'absolute',
  bottom: `${theme.spacing(0)}px`,
  right: kind === 'undo' ? '282px' : '226px',
  marginBottom: '30px',
  backgroundColor: theme.palette.common.white
}));

export const PopUp = styled('div')`
  display: flex;
  position: absolute;
  bottom: ${({ theme }) => theme.spacing(0.25)}px;
  left: 18%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  background: linear-gradient(
    -90deg,
    rgb(85, 201, 196) 0%,
    rgb(145, 220, 217) 100%
  );
  border-radius: 7px;
  box-shadow: 0px 8px 22px 0px rgba(89, 202, 197, 0.38);
  height: 47px;
  width: 400px;
`;

export const PopUpDraw = styled('img')`
  width: 24px;
  height: 24px;
  margin: ${({ theme }) => theme.spacing(1.375)}px
    ${({ theme }) => theme.spacing(1)}px;
`;

export const PopUpTitle = styled('span')`
  color: ${({ theme }) => theme.palette.common.white};
  font-weight: bold;
  padding-top: ${({ theme }) => theme.spacing(1.5)}px;
`;

export const PopUpClose = styled('img')`
  width: 28px;
  padding-left: ${({ theme }) => theme.spacing(1.25)}px;
  cursor: pointer;
  position: absolute;
  right: ${({ theme }) => theme.spacing(1.25)}px;
  top: ${({ theme }) => theme.spacing(1.75)}px;
`;

export const Loading = styled(CircularProgress)`
  position: absolute;
  left: 48%;
  top: 45%;
`;
