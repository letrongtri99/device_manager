import { fork } from 'redux-saga/effects';
import auth from './auth';
import company from './company';
import user from './user';
import employee from './employee';
import invitation from './invitation';
import site from './site';

export default function* rootSaga() {
  yield fork(auth);
  yield fork(company);
  yield fork(user);
  yield fork(employee);
  yield fork(invitation);
  yield fork(site);
}
