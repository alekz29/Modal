import {createStore} from 'redux'

const initialState = {show: false, date: null}

const reducer = function (state = initialState, action) {

    switch (action.type) {
        case "OPEN": {
            state = {...state, show: action.payload}
            break
        }
        case "CONFIRM": {
            state = {...state, date: action.payload}
        }
    }
    return state;

}

const store = createStore(reducer)

export default store