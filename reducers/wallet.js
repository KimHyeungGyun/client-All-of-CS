import { 
    ADD_CARD,
    CARD_REQUEST,
    CARD_SUCCESS,
    CARD_FAILURE,
    GET_INFO_DEPT,
    GET_INFO_DEPT_SUCCESS,
    GET_INFO_DEPT_FAILURE,
} from "../actions/types";

//server에서 넘어오는 데이터 대문자인지 소문자인지 확인하기 
export const initialState = {
    gettingCard: false,
    cards: null,
    gettingInfoOfDept: false,
    infomation: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_CARD:
        return {
          ...state,
          cards: [dummyCard, ...state.cards],
        };
      case CARD_REQUEST:
        return {
          ...state,
          gettingCard: true,
        };
      case CARD_SUCCESS:
        return {
          ...state,
          gettingCard: false,
          cards: action.data,
        };
      case CARD_FAILURE:
        return {
          ...state,
          gettingCard: false,
          cards: false,
        };
      case GET_INFO_DEPT:
        return {
          ...state,
          gettingInfoOfDept: true,
        };
      case GET_INFO_DEPT_SUCCESS:
        return {
          ...state,
          gettingInfoOfDept: false,
          infomation: action.data,
        };
      case GET_INFO_DEPT_FAILURE:
        return {
          ...state,
          gettingInfoOfDept: false,
          infomation: false,
        };
      default:
        return state;
    }
};

export default reducer;