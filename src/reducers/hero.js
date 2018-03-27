import { ADD_HERO, UPDATE_HERO } from '../actionTypes';

export default function heroes(state = [], action) {
    switch(action.type) {
        case ADD_HERO:
            return [
                ...state,
                action.hero
            ]
        case UPDATE_HERO:
            return state.map((hero) => {
                if(hero.id === action.hero.id) {
                    return action.hero
                }
                return hero
            });
        default:
            return state
    }
}