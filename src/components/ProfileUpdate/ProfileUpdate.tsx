import { PopupStyled } from '@components/SiteAdministrators/SiteAdministrators.styled';
import { Box, CircularProgress, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import ConfirmClose from './ConfirmClose';
import ProfileUpdatePersonalDetailForm from './Form/Personal';
import { AvatarProfile, InputUpload, InputUploadLabel } from './ProfileUpdate.styled';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '@stores/slices/user';
import { WattAppState } from '@stores/index';
import WButton from '@components/Controls/WButton';
import { RequestStatus } from '@stores/shared/types/RequestStatus';
import { useIntl } from 'react-intl';
import ProfileUpdateCompanyDetailForm from './Form/Company';
import NotificationsIcon from '@assets/vectors/notifications.svg';
import CameraIcon from '@components/icons/Camera';

const ProfileUpdate = ({ setModalVisible }: { setModalVisible?: (p: boolean) => void }) => {
  const dispatch = useDispatch();
  const intl = useIntl();

  const [open, setOpen] = useState<boolean>(true);
  const [openConfirm, setOpenConfirm] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isEditingAvatar, setIsEditingAvatar] = useState<boolean>(false);

  const { item } = useSelector((state: WattAppState) => state.user.me);
  const { status: uploadStatus } = useSelector((state: WattAppState) => state.user.upload);
  const { status: deleteStatus } = useSelector((state: WattAppState) => state.user.delete);

  const handleConfirmCloseProfile = () => {
    if (isEditing) {
      setOpenConfirm(true);
    } else {
      setOpen(!open);
    }
  };

  const handleConfirmClosePopUp = (isConfirm = false) => () => {
    if (isConfirm) {
      setOpenConfirm(false);
      setOpen(!open);
    } else {
      setOpenConfirm(false);
    }
  };

  const handleAvatarUploadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.length) return;
    const file = e.target.files[0];
    dispatch(userActions.uploadProfileAvatarRequest(file));
  };

  const handleDeleteProfileAvatar = () => {
    dispatch(userActions.deleteProfileAvatarRequest());
  };

  return (
    <PopupStyled open={open} onClose={handleConfirmCloseProfile}>
      <Box>
        <ConfirmClose openConfirm={openConfirm} handleConfirmClosePopUp={handleConfirmClosePopUp} />
        <Box mb={2} display="flex" alignItems="center" justifyContent="center">
          <Box style={{ position: 'relative' }}>
            <InputUpload id="upload_photo" type="file" onChange={handleAvatarUploadChange} inputProps={{ accept: 'image/*' }} />
            <AvatarProfile src={item?.avatarUrl} alt={item?.firstName} />
          </Box>
        </Box>
        <Box mb={4} display="flex" justifyContent="center">
          {isEditingAvatar && !!item?.avatarUrl
            ? (
            <>
              <InputUploadLabel htmlFor="upload_photo">
                <WButton endIcon={uploadStatus === RequestStatus.Loading && <CircularProgress size={16} />} disabled={uploadStatus === RequestStatus.Loading} component="span">
                  {item?.avatarUrl
                    ? intl.formatMessage({
                      id: 'changePhoto',
                      defaultMessage: 'Change Photo',
                    })
                    : intl.formatMessage({
                      id: 'uploadPhoto',
                      defaultMessage: 'Upload Photo',
                    })}
                </WButton>
              </InputUploadLabel>
              <WButton endIcon={deleteStatus === RequestStatus.Loading && <CircularProgress size={16} />} disabled={deleteStatus === RequestStatus.Loading} component="span" onClick={handleDeleteProfileAvatar}>
                {intl.formatMessage({
                  id: 'deletePhoto',
                  defaultMessage: 'Delete photo',
                })}
              </WButton>
            </>
              )
            : (
            <WButton onClick={() => setIsEditingAvatar(true)} startIcon={<CameraIcon />}>
              Edit
            </WButton>
              )}
        </Box>
        <ProfileUpdatePersonalDetailForm setModalVisible={setModalVisible} setIsEditing={setIsEditing} />
        {item?.company && <ProfileUpdateCompanyDetailForm setModalVisible={setModalVisible} setIsEditing={setIsEditing} />}
        <Box ml={1} pt={3} width="100%">
          <Box display="flex">
            <Box mr={1}>
              <NotificationsIcon />
            </Box>
            <Typography variant="h4">
              {intl.formatMessage({
                id: 'update_profile_notification_setting',
                defaultMessage: 'Notification Settings',
              })}
            </Typography>
          </Box>
          <Typography variant="caption">
            {intl.formatMessage({
              id: 'update_profile_notification_setting_desc',
              defaultMessage: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            })}
          </Typography>
        </Box>
      </Box>
    </PopupStyled>
  );
};

export default ProfileUpdate;
