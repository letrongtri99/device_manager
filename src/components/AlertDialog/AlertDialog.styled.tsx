import WButton from '@components/Controls/WButton';
import styled from '@emotion/styled';
import { Box, Dialog, DialogContent } from '@material-ui/core';

export const AlertDialogContainer = styled(Dialog)`
  border-radius: ${({ theme }) => theme.spacing(3)}px;
`;

export const AlertDialogContent = styled(DialogContent)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing(3)}px;
  border-radius: ${({ theme }) => theme.spacing(3)}px;
`;

export const AlertDialogDeclineButton = styled(WButton)`
  border: 1px solid ${({ theme }) => theme.palette.black[100]};
`;

export const AlertDialogLoadingContainer = styled(Box)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const AlertDialogAcceptButton = styled(WButton)`
  border: 0;
  background-color: ${({ theme }) => theme.palette.common.black};
  color: ${({ theme }) => theme.palette.common.white};
  &:hover {
    background-color: ${({ theme }) => theme.palette.grey[500]};
  }
`;
