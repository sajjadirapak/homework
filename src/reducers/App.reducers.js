const appReducer = (state = 0, action) => {
    switch(action.type) {
      case "INC":
        state =state + action.payload;
        break;
      case "DEC":
      state = state - action.payload;
        break;
      default:
        break;
    };
    return state;
  };
  
  export default appReducer;