import { GetRegistrationCompanyParams, RegisterCompanyBody, UpdateCompanyBody } from '@stores/slices/company';
import ConnectionInstance from './connection-instance';

export const getCompanyRegistration = (params: GetRegistrationCompanyParams) => ConnectionInstance.get('registrationcompanies', { params: { ...params, key: process.env.SNOWPACK_PUBLIC_WATT_API_KEY } });

export const registerCompany = (data: RegisterCompanyBody) => ConnectionInstance.post('companies', data);

export const getCompanyDetail = (id: number) => ConnectionInstance.get(`companies/${id}`);

export const updateCompany = (data: UpdateCompanyBody) => ConnectionInstance.put(`companies/${data.id}`, data);
