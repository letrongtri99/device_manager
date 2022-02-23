import React, { useEffect, useState } from 'react';
import { HomeWrapper } from './HomeEmpty.styled';
import CardLayout from '@components/layouts/CardLayout';
import AlertDialog from '@components/AlertDialog';
import { useDispatch, useSelector } from 'react-redux';
import { InviteAction, userActions } from '@stores/slices/user';
import { WattAppState } from '@stores/index';
import { RequestStatus } from '@stores/shared/types/RequestStatus';

const HomeEmpty = () => {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const { items } = useSelector((state: WattAppState) => state.user.invites);
  const { status } = useSelector((state: WattAppState) => state.user.decide);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCancel = () => {
    dispatch(userActions.decideInviteRequest({ action: InviteAction.Decline, id: items[0].id }));
  };

  const handleConfirm = () => {
    dispatch(userActions.decideInviteRequest({ action: InviteAction.Accept, id: items[0].id }));
  };

  useEffect(() => {
    if (status === RequestStatus.Success) {
      handleClose();
    }
  }, [status]);

  useEffect(() => {
    dispatch(userActions.getMyInvitesRequest());
  }, []);

  useEffect(() => {
    if (items.length) {
      handleOpen();
    }
  }, [items]);

  return (
    <HomeWrapper p={5}>
      <CardLayout />
      {!!items.length && (
        <AlertDialog
          loading={status === RequestStatus.Loading}
          title={`You have been invited by ${items[0].company.name} company`}
          content="Please make your decision, note that you can only join 1 company at a time"
          open={open}
          onClose={handleClose}
          onCancel={handleCancel}
          onConfirm={handleConfirm}
        />
      )}
    </HomeWrapper>
  );
};

export default HomeEmpty;
