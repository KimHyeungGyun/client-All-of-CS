
import { 
    SET_USERNAME, 
    SET_PASSWORD, 
    SET_EMAIL, 
    LOG_IN, 
    LOG_OUT, 
    SIGN_UP,} from "./types";

//Sign Up Action creater


export const signUp = (data) => {
    return {
        type: SIGN_UP,
        data,
    }
}

//action creater 
export const loginAction = (data) => {
    return {
        type: LOG_IN,
        data,
    }
}

export const logoutAction = () => {
    return {
        type: LOG_OUT,
    }
}

export const setUsername = (data) => {
    return {
        type: SET_USERNAME,
        data,
    }
}

export const setEmail = (data) => {
    return {
        type: SET_EMAIL,
        data,
    }
}

export const setPassword = (data) => {
    return {
        type: SET_PASSWORD,
        data,
    }
}