export default function reducer(state={
    isLoggedIn: false,
    }, action){
    if (action.type === 'USER_LOGGED_IN'){
        return {
            ...state,
            isLoggedIn: true
        };
    }
    return state;
};
