export function selectBook (book) {
    // selectBook is an ActionCreator, it needs to return an action,
    // an object with a type property
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

export function newBook(book){
    return {
        type: 'NEW_BOOK',
        payload: book
    }
}

export function deleteBook(book){
    return {
        type: 'DELETE_BOOK',
        payload: book
    }
}

export function editBook(newBook, oldBook){
    return {
        type: 'EDIT_BOOK',
        payload: {
            newBook: newBook,
            oldBook: oldBook
        }
    }
}
