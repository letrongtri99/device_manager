import { DeleleteCompanyEmployeeBody, GetCompanyEmployeesParams } from '@stores/slices/employee';
import ConnectionInstance from './connection-instance';

export const getCompanyEmployee = (params: GetCompanyEmployeesParams) => ConnectionInstance.get('employees', { params });

export const deleteCompanyEmployee = (data: DeleleteCompanyEmployeeBody) => ConnectionInstance.delete('employees/' + data.id, { data });
