import {
    GET_GAME_LIST
} from '../actions/types';

export default function(state={}, action) {
    switch(action.type){

        case GET_GAME_LIST:
            return {...state, games: action.payload}

        default:
            return state
    }
}