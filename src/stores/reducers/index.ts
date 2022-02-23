import { combineReducers } from '@reduxjs/toolkit';
import { commonReducer } from '@stores/slices/common';
import { authReducer } from '@stores/slices/auth';
import { companyReducer } from '@stores/slices/company';
import { userReducer } from '@stores/slices/user';
import { employeeReducer } from '@stores/slices/employee';
import { invitationReducer } from '@stores/slices/invitation';
import { siteReducer } from '@stores/slices/site';

const rootReducer = combineReducers({
  common: commonReducer,
  auth: authReducer,
  company: companyReducer,
  user: userReducer,
  employee: employeeReducer,
  invitation: invitationReducer,
  site: siteReducer
});

export default rootReducer;
