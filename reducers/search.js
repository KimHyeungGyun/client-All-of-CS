export const initialState = {
    tags: [
    {
        id: 1,
        company: "KT",
    },
    {
        id: 2,
        company: "Samsung",
    },
    {
        id: 3,
        company: "SKT",
    },
    {
        id: 4,
        company: "다이슨",
    },
    {
        id: 5,
        company: "Apple",
    },
    {
        id: 6,
        company: "LG",
    },
    {
        id: 7,
        company: "대한통운",
    }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default reducer;