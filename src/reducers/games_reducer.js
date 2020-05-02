import {
    GET_GAME_LIST,
    GET_GAME_SLIDER,
    GET_PC_TRENDING_GAME,
    GET_PS4_TRENDING_GAME,
    GET_XBOX_ONE_TRENDING_GAME
} from '../actions/types';

export default function(state={}, action) {
    switch(action.type){

        case GET_GAME_LIST:
            return {...state, games: action.payload}
        case GET_GAME_SLIDER:
            return {...state, games_slider: action.payload}
        case GET_PC_TRENDING_GAME:
            return {...state, PC_trending_game: action.payload}
        case GET_PS4_TRENDING_GAME:
            return {...state, PS4_trending_game: action.payload}
        case GET_XBOX_ONE_TRENDING_GAME:
            return {...state, Xbox_One_trending_game: action.payload}
        default:
            return state
    }
}