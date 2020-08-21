import {
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  DEPARTMENTS_REQUEST,
  SEARCH_DEPARTMENTS_SUCCESS,
  SEARCH_DEPARTMENTS_FAILURE,
  SAVE_DEPT_ARRAY,
  INFO_REQUEST,
  INFO_SUCCESS,
  INFO_FAILURE,
  SAVE_CLICKED_DEPT,
  REGISTER_WALLET,
  REGISTER_WALLET_SUCCESS,
  REGISTER_WALLET_FAILURE,
} from "../actions/types";

//State
export const initialState = {
  isCompanySearching: false,
  companyTags: null,
  isDepartmentsSearching: false,
  departmentTags: null,
  deptArray: null,
  isInfoSearching: false,
  infomation: null,
  currentDept: null,
  currentDeptId: null,
  postingWallet: false,
  responseWallet: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        isCompanySearching: true,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        isCompanySearching: false,
        companyTags: action.data,
      };
    case SEARCH_FAILURE:
      return {
        ...state,
        isCompanySearching: false,
        companyTags: false,
      };
    case DEPARTMENTS_REQUEST:
      return {
        ...state,
        isDepartmentsSearching: true,
      };
    case SEARCH_DEPARTMENTS_SUCCESS:
      return {
        ...state,
        isDepartmentsSearching: false,
        departmentTags: action.data,
      };
    case SEARCH_DEPARTMENTS_FAILURE:
      return {
        ...state,
        isDepartmentsSearching: false,
        departmentTags: false,
      };
    case SAVE_DEPT_ARRAY:
      return {
        ...state,
        deptArray: action.data,
      };
    case INFO_REQUEST:
      return {
        ...state,
        isInfoSearching: true,
      };
      case INFO_SUCCESS:
      return {
        ...state,
        isInfoSearching: false,
        infomation: action.data,
      };
      case INFO_FAILURE:
      return {
        ...state,
        isInfoSearching: false,
        infomation: false,
      };
      case SAVE_CLICKED_DEPT:
      return {
        ...state,
        currentDept: action.currentDept,
        currentDeptId: action.currentDeptId,
      };
      case REGISTER_WALLET:
      return {
        ...state,
        postingWallet: true,
      };
      case REGISTER_WALLET_SUCCESS:
      return {
        ...state,
        postingWallet: false,
        responseWallet: action.data,
      };
      case REGISTER_WALLET_FAILURE:
      return {
        ...state,
        isInfoSearching: false,
        responseWallet: false,
      };
      
    default:
      return state;
  }
};

export default reducer;