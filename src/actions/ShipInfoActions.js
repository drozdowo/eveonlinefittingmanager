export function startFetchingShipNames(){
    return {
        type: 'FETCHING_SHIP_ARRAY'
    }
}

export function errorFetchingShipNames(err){
    return {
        type: 'ERROR_FETCHING_SHIP_ARRAY',
        payload: {
            error: err
        }
    }
}

export function gotFetchingShipNames(shipArr){
    return {
        type: 'GOT_SHIP_ARRAY',
        payload: {
            shipInfoArray: shipArr
        }
    }
}