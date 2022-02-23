import CloseIcon from '@assets/vectors/close.svg';
import { Box, ModalProps } from '@material-ui/core';
import theme from '@styles/theme';
import React from 'react';
import { ModalCloseButton, ModalWraper, PopupWrapper } from './Popup.styled';

type PopupProps = ModalProps;
const Popup = ({ children, open, onClose, ...props }: PopupProps) => {
  return (
    <ModalWraper open={open} onClose={onClose} {...props} BackdropProps={{ style: { background: 'white', opacity: 0.8, backdropFilter: 'blur(8px)' } }}>
      <PopupWrapper p={4} className="popup-wrapper">
        <Box position="relative">
          <Box bgcolor={theme.palette.common.white} top={-8} right={-8} position="absolute" zIndex={10} display="flex" justifyContent="flex-end">
            <ModalCloseButton onClick={() => onClose?.({}, 'escapeKeyDown')}>
              <CloseIcon />
            </ModalCloseButton>
          </Box>
        </Box>
        {children}
      </PopupWrapper>
    </ModalWraper>
  );
};

export default Popup;
