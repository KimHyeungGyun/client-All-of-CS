import { 
    SEARCH_REQUEST,
    DEPARTMENTS_REQUEST,
    SAVE_DEPT_ARRAY,
    INFO_REQUEST,
    SAVE_CLICKED_DEPT,
    REGISTER_WALLET,
 } from "./types";

export const searchHandler = (data) => {
    return {
        type: SEARCH_REQUEST,
        data,
      };
};

export const deptRequest = (data) => {
    console.log(data)
    return {
        type: DEPARTMENTS_REQUEST,
        data,
      };
};

export const saveDeptArray = (data) => {
    console.log(data)
    return {
        type: SAVE_DEPT_ARRAY,
        data,
      };
};

export const infoRequest = (data) => {
    return {
        type: INFO_REQUEST,
        data,
      };
};

export const saveDetailInfo = (dept, id) => {
    return {
        type: SAVE_CLICKED_DEPT,
        currentDept: dept,
        currentDeptId: id,
      };
};

export const registerWallet = (data) => {
    return {
        type: REGISTER_WALLET,
        data
      };
};

