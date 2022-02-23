import styled from '@emotion/styled';
import { Typography, TextField, Box, IconButton, Button, Input, InputLabel } from '@material-ui/core';
import Avatar from '@components/Avatar';
import Popup from '@components/Popup';
import WButton from '@components/Controls/WButton';

export const AvatarProfile = styled(Avatar)`
  width: 150px;
  height: 150px;
  src: 'https://images.unsplash.com/photo-1613301688429-4332977ecf57';
  background-color: ${({ theme }) => theme.palette.common.white};
  box-shadow: 1px 1px 20px ${({ theme }) => theme.palette.gray[200]};
`;

export const ProfileName = styled(Typography)`
  font-weight: 700;
`;

export const CameraBadge = styled(IconButton)`
  background-color: ${({ theme }) => theme.palette.blue[300]};
  position: absolute;
  z-index: 10;
  left: 80%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  &:hover {
    background-color: ${({ theme }) => theme.palette.blue[300]};
  }
`;

export const ProfileButton = styled(WButton)``;

export const InputUpload = styled(Input)`
  display: none;
`;

export const InputUploadLabel = styled(InputLabel)`
  height: 100%;
  display: inline-block;
  color: ${({ theme }) => theme.palette.common.black};
`;

export const InputLabelFixed = styled(Box)`
  color: ${({ theme }) => theme.palette.gray[100]};
  width: ${({ theme }) => theme.spacing(12)}px;
`;

export const PopupStyled = styled(Popup)`
  .popup-wrapper {
    width: 40%;
    height: 80%;
    max-width: ${({ theme }) => theme.spacing(65)}px;
  }
`;
