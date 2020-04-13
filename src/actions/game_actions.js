import axios from 'axios';

import {
    GET_GAME_LIST,
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