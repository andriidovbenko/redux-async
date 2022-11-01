import { SET_MESSAGE, GET_JOKES_FETCH, GET_JOKES_SUCCESS, GET_JOKES_FAILURE } from '../actionTypes/actionTypes'

export const setMessage = (message) => {
    return {
        type: SET_MESSAGE,
        payload: message
    }
}

const getJokesFetch = () => {
    return {
        type: GET_JOKES_FETCH,
    }
}

const getJokesSuccess = (joke) => {
    return {
        type: GET_JOKES_SUCCESS,
        payload: joke
    }
}

const getJokesFailure = (err) => {
    return {
        type: GET_JOKES_FAILURE,
        payload: err
    }
}

export const getJokes = () => {
    return async function (dispatch, getState) {
        dispatch(getJokesFetch())
        const state = getState()
        try {
            const resp = await fetch(`https://api.chucknorris.io/jokes/search?query=${state.message}`)
            const data = await resp.json();
            const joke = data.result[0]?.value
            dispatch(getJokesSuccess(joke))
        } catch (error) {
            dispatch(getJokesFailure(error))
        }   
    }
}