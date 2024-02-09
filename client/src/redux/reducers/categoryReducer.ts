import type { Category } from '../../features/categories/types';
import type {Action} from './types'

type State = {
    categories: Category[]
}

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