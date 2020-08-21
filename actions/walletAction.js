
import { CARD_REQUEST, GET_INFO_DEPT } from "./types";
import axios from "axios";

//action creater 
export const cardRequest = () => {
    return {
        type: CARD_REQUEST,
    }
}
export const getInfoOfDept = (data) => {
    return {
        type: GET_INFO_DEPT,
        data,
    }
}
export const addCard = (data) => {
    return {
        type: ADD_CARD,
        data,
    }
}