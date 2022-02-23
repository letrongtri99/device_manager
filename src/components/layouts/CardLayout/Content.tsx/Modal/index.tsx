import CloseIcon from '@components/icons/Close';
import { Box, Button, Slide, SlideProps } from '@material-ui/core';
import React, { ReactNode } from 'react';
import useHideScrollbar from '@hooks/useHideScrollbar';
import { CardLayoutContentContentModalPaper } from './CardLayoutContentContentModal.styled';

interface CardLayoutContentContentModalProps {
  children: ReactNode;
  onClose: () => void;
}

const CardLayoutContentContentModal = ({ onClose, children, ...props }: SlideProps & CardLayoutContentContentModalProps) => {
  useHideScrollbar({
    container: 'siteusersetup-container',
    removeCSS: 'show-scrollbar',
  });
  return (
    <Slide direction="up" mountOnEnter unmountOnExit {...props}>
      <CardLayoutContentContentModalPaper id="siteusersetup-container">
        <Box position="absolute" top={20} right={20}>
          <Button onClick={onClose}>
            <CloseIcon />
          </Button>
        </Box>
        <Box>{children}</Box>
      </CardLayoutContentContentModalPaper>
    </Slide>
  );
};

export default CardLayoutContentContentModal;
