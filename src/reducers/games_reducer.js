import {
    GET_GAME_LIST,
    GET_GAME_SLIDER
} from '../actions/types';

export default function(state={}, action) {
    switch(action.type){

        case GET_GAME_LIST:
            return {...state, games: action.payload}
        case GET_GAME_SLIDER:
            return {...state, games_slider: action.payload}
        default:
            return state
    }
}