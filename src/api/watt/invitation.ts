import { DeleleteCompanyEmployeeBody } from '@stores/slices/employee';
import { CreateEmployeeInvitationParams, GetEmployeeInvitationsParams } from '@stores/slices/invitation';
import ConnectionInstance from './connection-instance';

export const getEmployeeInvitation = (params: GetEmployeeInvitationsParams) => ConnectionInstance.get('employeeinvitations', { params });

export const createEmployeeInvitation = (data: CreateEmployeeInvitationParams) => ConnectionInstance.post('employeeinvitations', data);

export const deleteEmployeeInvitation = (params: DeleleteCompanyEmployeeBody) => ConnectionInstance.delete('employeeinvitations/' + params.id, { params });
