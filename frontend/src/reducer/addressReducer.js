import { ADDRESS_INFO_REQUEST, ADDRESS_INFO_SUCCESS, ADDRESS_INFO_FAIL } from "../constants/addressConstants"

function addressReducer(state = {address: {}}, action){

    switch(action.type) {

        case ADDRESS_INFO_REQUEST:
            return {apiRequest: false, address: action.payload}
        case ADDRESS_INFO_SUCCESS:
            return {apiRequest: true, address: action.payload}
        case ADDRESS_INFO_FAIL:
            return {apiRequest: false, address: action.payload}
        default:
            return state
        }
}

export {addressReducer}