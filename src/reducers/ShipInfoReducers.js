const initialState = {
    shipInfoArray: [],
    isFetchingShipNames: false,
    didFetchShipArray: false,
    isError: false,
    selectedShipInfoArray: null,
    error: {}
}
export default function reducer(state=initialState, action){
    if (action.type === 'GOT_SHIP_ARRAY'){
        return {
            ...state,
            shipInfoArray: action.payload.shipInfoArray,
            isFetchingShipNames: false,
            didFetchShipArray: true,
            isError: false
        }
    }
    else if (action.type === 'FETCHING_SHIP_ARRAY'){
        return {
            ...state,
            isFetchingShipInfo: true,
            isError: false
        }
    }
    else if (action.type === 'FETCHING_SHIP_ARRAY_FAILED'){
        return {
            ...state,
            isFetchingShipInfo: false,
            didFetchShipArray: false,
            isError: true,
            error: action.payload.error
        }
    }
    else if (action.type === 'SELECTED_SHIP_ID'){
        return {
            ...state,
            selectedShipInfoArray: action.payload.selectedShipInfoArray
        }
    }
    return state;
}