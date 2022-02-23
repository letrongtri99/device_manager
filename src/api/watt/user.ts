import { CreateProfileBody, UpdateProfileBody } from '@stores/slices/user';
import ConnectionInstance from './connection-instance';

export const getMyProfile = () => ConnectionInstance.get('profiles/me');

export const createProfile = (data: CreateProfileBody) => ConnectionInstance.post('profiles', data);

export const updateProfile = (data: UpdateProfileBody) => ConnectionInstance.put('profiles/me', data);

export const updateProfileAvatar = (image: FormData) =>
  ConnectionInstance.put('profiles/me/avatar', image, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });

export const getMyInvites = () => ConnectionInstance.get('profiles/me/employeeinvites');

export const acceptInvite = (employeeinviteId: number) => ConnectionInstance.post(`profiles/me/employeeinvites/${employeeinviteId}/accept`);

export const declineInvite = (employeeinviteId: number) => ConnectionInstance.post(`profiles/me/employeeinvites/${employeeinviteId}/decline`);

export const deleteProfileAvatar = () => ConnectionInstance.delete('profiles/me/avatar');
