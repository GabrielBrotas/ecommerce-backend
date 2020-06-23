import { ADDRESS_INFO_FAIL, ADDRESS_INFO_REQUEST, ADDRESS_INFO_SUCCESS } from "../constants/addressConstants"
import Axios from "axios"

const getAddress = (cep, addressData) => async (dispatch) => {
    try{
        dispatch({type: ADDRESS_INFO_REQUEST, payload: addressData})

        const {data} = await Axios.get('https://viacep.com.br/ws/' + cep + '/json/')
        
        if(data) {
            dispatch({type: ADDRESS_INFO_SUCCESS, payload: data})
        } 
    
    } catch(error) {
        
        dispatch({type: ADDRESS_INFO_FAIL, payload: addressData})
        
    }
}


export {getAddress}