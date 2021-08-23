export const initialState = {
  employees: [],
  isLoading: true,
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_EMPLOYEE':
      return {
        ...state,
        employees: action?.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action?.payload,
      };
    default:
      return state;
  }
};
