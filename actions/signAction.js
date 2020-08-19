import { 
    SHOW_MODAL_SIGNUP, 
    SHOW_MODAL_SIGNIN,
    HANDLE_OK_BTN,
    HANDLE_CANCLE_BTN,
    } from "./types";

export const showModalSignUpAction = (data) => {
    return{
        type : SHOW_MODAL_SIGNUP,
        data,
    }
}

export const showModalSignInAction = (data) => {
    return{
        type : SHOW_MODAL_SIGNIN,
        data,
    }
}

export const handleOkAction = (data) => {
    return{
        type : HANDLE_OK_BTN,
        data,
    }
}

export const handleCancleAction = (data) => {
    return{
        type : HANDLE_CANCLE_BTN,
        data,
    }
}