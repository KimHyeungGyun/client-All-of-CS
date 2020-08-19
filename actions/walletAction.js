
import { TURN_VISIBLE, SAVE_TEMP_DEPT } from "./types";
import Axios from "axios";

//action creater 
export const turnVisible = (data) => {
    return {
        type: TURN_VISIBLE,
        data,
    }
}
export const saveTempDept = (data) => {
    return {
        type: SAVE_TEMP_DEPT,
        data,
    }
}
export const addCard = (data) => {
    return {
        type: ADD_CARD,
        data,
    }
}