const initialState = {
    searchBarText: '',
    isSearchBarActive: false,
    searchBarInitialValue: 'Search for Ship Fits!'
}

export default 
function reducer(state=initialState, action){
    if (action.type === 'USER_SEARCH_TYPED'){
        return {
            ...state,
            searchBarText: state.searchBarText = action.payload.text,
            isSearchBarActive: true
        }
    }
    else if (action.type === 'USER_SEARCH_BAR_BLUR'){
        return{
            ...state,
            isSearchBarActive: false
        }
    }
    else if (action.type === 'USER_SEARCH_BAR_FOCUS'){
        return {
            ...state,
            isSearchBarActive: true
        }
    }

    return state;
}