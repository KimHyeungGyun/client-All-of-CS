//server에서 넘어오는 데이터 대문자인지 소문자인지 확인하기 
export const initialState = {
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
    }, ]
}

const ADD_CARD = 'ADD_CARD';
export const addCard = {
    type: ADD_CARD,
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
        default:
            return state;
    }
};

export default reducer;