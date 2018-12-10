import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';
import NavigationService from '../navigation/NavigationService';

import {
  EMAIL_CHANGED, PASSWORD_CHANGED,
  LOGIN_SUCCESS, LOGIN_FAIL,
} from './types';

export const emailChanged = text => ({
  type: EMAIL_CHANGED,
  payload: text,
});

export const passwordChanged = text => ({
  type: PASSWORD_CHANGED,
  payload: text,
});

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => successfulLogin(dispatch, user))
      .catch(error => createUser(dispatch, email, password));
  };
};

const createUser = (dispatch, email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(user => successfulLogin(dispatch, user))
    .catch(error => failedLogin(dispatch, error));
};

const successfulLogin = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user,
  });

  NavigationService.navigate('Employees');
};

const failedLogin = (dispatch, error) => {
  dispatch({
    type: LOGIN_FAIL,
    payload: error,
  });
};
