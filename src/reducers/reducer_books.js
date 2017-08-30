const initialState = [
    { title: 'Moby Dick', pages: 452, ISBN: null },
    { title: 'Great Expectations', pages: 365, ISBN: null },
    { title: 'Lord of the Rings', pages: 547, ISBN: null },
    { title: 'Your Best Life Now', pages: 69, ISBN: null },
    { title: 'Mortification of Spin', pages: 135, ISBN: null },
    { title: 'Ordinary', pages: 254, ISBN: null },
    { title: 'Radical', pages: 241, ISBN: null },
    { title: 'Desiring God', pages: 300, ISBN: null },
];

export default function (state = initialState, action) {
    switch (action.type) {
        case 'NEW_BOOK':
        return [
            ...state,
            action.payload
        ]
        case 'DELETE_BOOK' :
            let filteredState = state.filter( (element) => element.title != action.payload.title);
            return [
                ...filteredState
            ]
        case 'EDIT_BOOK' :
        // find old book and replace it with new book
        let newState = state.map( (element) => {
            if (element.title === action.payload.oldBook.title){
                return action.payload.newBook;
            } else {
                return element;
            }
        })
            return [
                ...newState
            ]
        default :
            return state;
    }
}


// return state.slice( (element) => element.title != action.payload.title)
