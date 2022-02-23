import firebase from 'firebase';

export interface FirebaseLoginRequest {
  phoneNumber: string;
  recaptchaVerifier: firebase.auth.RecaptchaVerifier;
}
