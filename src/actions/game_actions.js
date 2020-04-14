import axios from 'axios';

import {
    GET_GAME_LIST,
    GET_GAME_SLIDER
} from './types';


const API_URL = 'http://localhost:5000/api';

export function getGameList(limit){

    const request = axios.get(`${API_URL}/getGames/?limit=${limit}`, )
    .then(response=> {
        if(response.status == 200){
            return response.data
        }else{
            return null
        }
        
    })

    return {
        type: GET_GAME_LIST,
        payload: request
    }
}


export  async function getGameSlider(name){

    const promises = name.map( async name => {
        const response = await axios.get(`${API_URL}/searchGame/?name=${name}`)
        if(response.status == 200){
            return response.data[0]
        }else{
            return null
        }
    })
    
    const results = await Promise.all(promises)

    return {
        type: GET_GAME_SLIDER,
        payload: results
    }

}