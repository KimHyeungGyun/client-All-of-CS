import { ADD_CARD, TURN_VISIBLE, SAVE_TEMP_DEPT} from "../actions/types";

//server에서 넘어오는 데이터 대문자인지 소문자인지 확인하기 
export const initialState = {
    tempDept: '',
    visible: false,
    cards: [{
        id: 1,
        user: {
            id: 1,
            email: 'kwh4921@gmail.com',
            username: 'DevWhkang',
        },
        company: 'KT',
        department: ['A/S', '리퍼', '환불부서',],
    }, {
        id: 1,
        user: {
            id: 1,
            email: 'kwh4921@gmail.com',
            username: 'DevWhkang',
        },
        company: 'Apple',
        department: ['A/S', '리퍼', '환불부서',],
    }, {
        id: 1,
        user: {
            id: 1,
            email: 'kwh4921@gmail.com',
            username: 'DevWhkang',
        },
        company: 'LG',
        department: ['A/S', '리퍼', '환불부서',],
    }, {
        id: 1,
        user: {
            id: 1,
            email: 'kwh4921@gmail.com',
            username: 'DevWhkang',
        },
        company: 'SKT',
        department: ['A/S', '리퍼', '환불부서',],
    }, {
        id: 1,
        user: {
            id: 1,
            email: 'kwh4921@gmail.com',
            username: 'DevWhkang',
        },
        company: '다이슨',
        department: ['A/S', '리퍼', '환불부서',],
    }, ],
    
}

const dummyCard = {
    id: 2,
    user: {
        id: 1,
        email: 'devwhkang@gmail.com',
        username: 'kwh',
    },
    company: 'Apple',
    department: 'Service Center',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {        
        case ADD_CARD:
            return {
                ...state,
                cards: [dummyCard, ...state.cards],
            }
        case TURN_VISIBLE:
            return {
                ...state,
                visible: action.data
            }
        case SAVE_TEMP_DEPT:
            return {
                ...state,
                tempDept: action.date
            }
        default:
            return state;
    }
};

export default reducer;