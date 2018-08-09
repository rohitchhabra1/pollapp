import {createAction} from 'redux-actions';
import constants from './constants';

export const userSignUpRequest = createAction(constants.USER_SIGNUP_REQUEST);
export const userSignUpSuccess = createAction(constants.USER_SIGNUP_SUCCESS);
export const userSignUpError = createAction(constants.USER_SIGNUP_ERROR);