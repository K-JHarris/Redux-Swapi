// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

import axios from 'axios'

export const GET = 'GET'
export const SUCCESS = 'SUCCESS'
export const FAILED_REQUEST = 'FAILED_REQUEST'

export const get = () => dispatch => {
    console.log("i did it!")
    dispatch({type: GET})
    axios
        .get(`https://swapi.co/api/people/`)
        .then(res => {
            console.log(res.data.results)
            dispatch({type: SUCCESS, payload: res.data.results})
            }
        )
        .catch(err => dispatch({type: FAILED_REQUEST, payload: err + 'i didnt do it :<'}))
}