const LoginReducer = (state = {}, action) => {
    if (action.type === 'USER_LOGIN'){
        console.log('Login Reducer: ' + action.payload.name);
        return (Object.assign({}, state, {  name: action.payload.name, 
                                            apiKey: action.payload.apiKey}));
    }
    return state;
}

export default LoginReducer;