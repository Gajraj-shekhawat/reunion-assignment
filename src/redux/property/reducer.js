import { propertyActions } from "./actiontypes";

const initialState = {
  isLoading: false,
  isError: false,
  data: [],
};

export const propertyReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case propertyActions.REQUEST: {
      return { ...state, isLoading: true };
    }
    case propertyActions.SUCCESS: {
      return { ...state, isLoading: false, data: payload };
    }
    case propertyActions.FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }
    default: {
      return state;
    }
  }
};
