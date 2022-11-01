import {SET_MESSAGE, GET_JOKES_FETCH, GET_JOKES_SUCCESS, GET_JOKES_FAILURE} from './actionTypes/actionTypes'

const initState = {
    message: '',
    loading: false,
    joke: '',
    hasError: false
};

const reducer = (state = initState, action) => {
    const { type, payload } = action
    switch(type) {
        case SET_MESSAGE: {
            return {
                ...state,
                message: payload
            }
        }
        case GET_JOKES_FETCH: {
            return {
                ...state,
                loading: true,
                joke: '',
                hasError: false
            }
        }
        case GET_JOKES_SUCCESS: {
            return {
                ...state,
                loading: false,
                joke: payload
            }
        }
        case GET_JOKES_FAILURE: {
            return {
                ...state,
                loading: false,
                joke: '',
                hasError: true
            }
        }
        default:
            return state
    }
}

export default reducer