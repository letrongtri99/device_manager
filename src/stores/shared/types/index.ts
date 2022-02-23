export interface Address {
  address: 'string';
  zip: 'string';
  city: 'string';
}

export enum RoleTypes {
  CompanyOwner = 'CompanyOwner',
  CompanyAdmin = 'CompanyAdmin',
  CompanyEmployee = 'CompanyEmployee',
  BillingAdmin = 'BillingAdmin'
}

export interface MarkerPoint {
  lat: number;
  lng: number;
}

export enum ClientType {
  Company = 'Company',
  Person = 'Person'
}

export enum SiteAccessType {
  SiteAdmin = 'SiteAdmin',
  Charging = 'Charging',
  Installation = 'Installation'
}

export enum ClientRoleType {
  CompanyOwner = 'CompanyOwner',
  CompanyAdmin = 'CompanyAdmin',
  CompanyEmployee = 'CompanyEmployee'
}
