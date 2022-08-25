import { favoriteActions } from "./actiontypes";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const favoriteReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case favoriteActions.REQUEST: {
      return { ...state,isLoading:true};
    }
    case favoriteActions.SUCCESS: {
      return { ...state,isLoading:false,data:payload};
    }
    case favoriteActions.FAILURE: {
      return { ...state,isLoading:false,isError:true};
    }
    default: {
      return state;
    }
  }
};
