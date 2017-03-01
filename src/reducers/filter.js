import { switchFilter } from '../actions';

const filter = (state = 'all', action) => {
  switch(action.type) {
    case 'SWITCH_FILTER':
      return action.filter;
    default:
      return state;
  }
}

export default filter;