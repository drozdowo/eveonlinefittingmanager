export function userTyped(text){
    return {
        type: 'USER_SEARCH_TYPED',
        payload: {
            text: text
        }
    }
}

export function searchBarFocus(){
    return{
        type: 'USER_SEARCH_BAR_FOCUS'
    }
}

export function searchBarBlur(){
    return {
        type: 'USER_SEARCH_BAR_BLUR'
    }
}


export function selectedShip(shipTypeId){
    return {
        type: 'SELECTED_SHIP_ID',
        payload: {
            shipTypeId: shipTypeId
        }
    }
}