import type {Action, State} from './types'

const initialState = {
    categories: []
}

export const heroesReducer = (state: State = initialState, action: Action): State => {
    switch (action.type) {
      case 'categories/load':
        return {
          ...state,
          categories: action.payload,
        };
      default:
        return state;
    }
  };