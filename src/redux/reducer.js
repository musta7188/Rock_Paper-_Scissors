const initialState = {
  user: null,
  score: 0,
  userChoice: null,
  computerChoice: null,
  showResult: false,
};

const appReducer = (state = initialState, action) => {
  if (action.type === "SET_USER") {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  if (action.type === "SET_USER_CHOICE") {
    return {
      ...state,
      userChoice: action.payload.choice,
    };
  }
  if (action.type === "COMPUTER_CHOICE") {
    return {
      ...state,
      computerChoice: action.payload.choice,
    };
  }
  if (action.type === "RESET") {
    return {
      ...state,
      userChoice: null,
      computerChoice: null,
      showResult: false,
    };
  }
  if (action.type === "RESULT") {
    if (action.payload.result === "WIN") {
      return {
        ...state,
        score: state.score + 1,
      };
    } else if (action.payload.result === "LOSE") {
      return {
        ...state,
        score: state.score === 0 ? state.score : state.score - 1,
      };
    }
  }

  if (action.type === "CHANGE_CLASS") {
    return {
      ...state,
      showResult: true,
    };
  }
  if (action.type === "LOG__OUT") {
    return {
      ...state,
      user: null,
      score: 0,
      userChoice: null,
      computerChoice: null,
    };
  }

  return state;
};

export default appReducer;
