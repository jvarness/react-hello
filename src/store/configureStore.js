import { createStore } from 'redux'
import reducers from '../reducers'

let initialState = {
    heroes: [
        {id: 11, name: 'George Washington'},
        {id: 12, name: 'Mr Pants'},
        {id: 13, name: 'Star Boy'},
        {id: 14, name: 'Captain of Outer Space'},
        {id: 15, name: 'Annie Oakley'},
        {id: 16, name: 'Pablo Picasso'},
    ]
}

export default function configureStore(state = initialState) {
    return createStore(reducers, state)
}