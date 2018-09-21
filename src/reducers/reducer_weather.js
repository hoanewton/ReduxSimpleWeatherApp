import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
  case FETCH_WEATHER:
    // es6 syntax ...state will put all elements inside the state array in this new array
    return [ action.payload.data, ...state ];
  }
  return state;
}
