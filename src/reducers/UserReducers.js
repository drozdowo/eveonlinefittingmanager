const initialState = {
    userName: '',
    loggedInAt: '',
    esiKey: '',
    isLoggedIn: false
}

export default function 
reducer(
state=initialState, action){
    if (action.type === 'USER_CLICKED_LOGIN'){
        return {
            ...state,
            isLoggedIn: true
        }
    }
    return state;
};