import { ADD_HERO, UPDATE_HERO } from "../actionTypes/index"

export function addHero(hero) {
    return { type: ADD_HERO, hero }
}

export function updateHero(hero) {
    return { type: UPDATE_HERO, hero }
}
