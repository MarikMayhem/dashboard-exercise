const initialState = {
    searchWord: ''
}

const searchReducer = (state = initialState, action) => {

    if (action.type === 'SEARCH') {
        return state = { searchWord: action.event.target.value }
    }

    return state;
}

export default searchReducer