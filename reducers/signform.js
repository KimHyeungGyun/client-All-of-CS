import { 
    SHOW_MODAL_SIGNUP, 
    SHOW_MODAL_SIGNIN,
    HANDLE_OK_BTN,
    HANDLE_CANCLE_BTN,
    } from "../actions/types";

export const initialState = {
    signup: {
        visible: false,
    },
    signin: {
        visible: false,
    }
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case SHOW_MODAL_SIGNUP:
        return{
            ...state,
            signup:{
                visible : action.data
            }
        }
        case SHOW_MODAL_SIGNIN:
        return{
            ...state,
            signin:{
                visible : action.data
            }
        }
        case HANDLE_CANCLE_BTN:
        return{
            signup:{
                visible: action.data,
            },
            signin:{
                visible: action.data,
            }  
        }
        case HANDLE_OK_BTN:
        return{
            signup:{
                visible: action.data,
            },
            signin:{
                visible: action.data,
            }  
        }
        default : 
            return state;
    }
}

export default reducer;