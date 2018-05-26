const initialState = {
    shipNameArray: [],
    isFetchingShipNames: false,
    didFetchShipArray: false,
    isError: false,
    error: {}
}
export default function reducer(state=initialState, action){
    if (action.type === 'GOT_SHIP_ARRAY'){
        return {
            ...state,
            shipNameArray: action.payload.shipNameArray,
            isFetchingShipNames: false,
            didFetchShipArray: true,
            isError: false
        }
    }
    else if (action.type === 'FETCHING_SHIP_ARRAY'){
        return {
            ...state,
            isFetchingShipNames: true,
            isError: false
        }
    }
    else if (action.type === 'FETCHING_SHIP_ARRAY_FAILED'){
        return {
            ...state,
            isFetchingShipNames: false,
            didFetchShipArray: false,
            isError: true,
            error: action.payload.error
        }
    }
    return state;
}