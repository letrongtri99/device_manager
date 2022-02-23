import { Box, CircularProgress, Typography } from '@material-ui/core';
import React from 'react';
import { AlertDialogAcceptButton, AlertDialogContainer, AlertDialogContent, AlertDialogDeclineButton, AlertDialogLoadingContainer } from './AlertDialog.styled';

interface Props {
  onConfirm?: () => void;
  onClose: () => void;
  onCancel?: () => void;
  acceptButtonTitle?: string;
  declineButtonTitle?: string;
  content?: string;
  open: boolean;
  title?: string;
  loading?: boolean;
}

const AlertDialog = ({ loading, open, onConfirm, onCancel, onClose, declineButtonTitle = 'Cancel', acceptButtonTitle = 'Ok', title = 'Alert', content = 'Are you sure to do this action' }: Props) => {
  return (
    <AlertDialogContainer PaperProps={{ style: { borderRadius: 10 } }} fullWidth={true} maxWidth="xs" open={open} onClose={onClose}>
      {loading && (
        <AlertDialogLoadingContainer>
          <CircularProgress size={30} />
        </AlertDialogLoadingContainer>
      )}
      <AlertDialogContent>
        <Box mb={3}>
          <Typography variant="h3">{title}</Typography>
        </Box>
        <Box mb={3}>
          <Typography variant="body1">{content}</Typography>
        </Box>
        <Box display="flex" gridGap={22} justifyContent="center">
          <AlertDialogDeclineButton onClick={onCancel} variant="outlined">
            {declineButtonTitle}
          </AlertDialogDeclineButton>
          <AlertDialogAcceptButton onClick={onConfirm} variant="contained">
            {acceptButtonTitle}
          </AlertDialogAcceptButton>
        </Box>
      </AlertDialogContent>
    </AlertDialogContainer>
  );
};

export default AlertDialog;
