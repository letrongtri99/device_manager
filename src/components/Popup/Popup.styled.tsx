import styled from '@emotion/styled';
import { Box, Modal, IconButton } from '@material-ui/core';

export const PopupWrapper = styled(Box)`
  width: 60vw;
  height: 80vh;
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.12);
  border-radius: ${({ theme }) => theme.spacing(1)}px;
  outline: none;
  overflow-y: scroll;
`;

export const ModalWraper = styled(Modal)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ModalCloseButton = styled(IconButton)`
  padding: ${({ theme }) => theme.spacing(1)}px;
`;
