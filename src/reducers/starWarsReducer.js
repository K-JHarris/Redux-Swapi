
import {GET, SUCCESS, FAILED_REQUEST} from "../actions"

const initialState = {
  characters: [],
  getting: false,
  error: null,
}

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET:
      return {
        ...state,
        getting: true,
        error: null,
      }
    case SUCCESS:
      return {
        ...state,
        getting: false,
        characters: [...state.characters, ...action.payload]
      }
    case FAILED_REQUEST:
      return {
        ...state,
        getting: false,
        error: action.payload,
      }
    default:
      return state;
  }
}