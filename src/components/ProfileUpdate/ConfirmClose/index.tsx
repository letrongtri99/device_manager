import React from 'react';
import { useIntl } from 'react-intl';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from '@material-ui/core';

interface Props {
  openConfirm: boolean;
  handleConfirmClosePopUp: (isConfirm: boolean) => () => void;
}

const ConfirmRemove = ({ openConfirm, handleConfirmClosePopUp }: Props) => {
  const intl = useIntl();

  return (
    <Dialog
      fullWidth={true}
      maxWidth="xs"
      open={openConfirm}
      onClose={handleConfirmClosePopUp(false)}
    >
      <DialogTitle>
        {intl.formatMessage({
          id: 'common_confirm',
          defaultMessage: 'Confirm'
        })}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          {intl.formatMessage({
            id: 'update_profile_cancel_warning',
            defaultMessage: 'Are you sure want to cancel this editting?'
          })}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleConfirmClosePopUp(false)} color="primary">
          {intl.formatMessage({
            id: 'common_button_no',
            defaultMessage: 'No'
          })}
        </Button>
        <Button onClick={handleConfirmClosePopUp(true)}>
          {intl.formatMessage({
            id: 'common_button_yes',
            defaultMessage: 'Yes'
          })}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmRemove;
