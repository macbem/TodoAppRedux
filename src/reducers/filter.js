const filter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'SWITCH_FILTER':
      return action.filter;
    default:
      return state;
  }
};

export default filter;
