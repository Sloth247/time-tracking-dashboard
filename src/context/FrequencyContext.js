import { createContext, useReducer } from "react";

export const FrequencyContext = createContext();

const FrequencyReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_FREQUENCY":
      return { ...state, frequency: action.payload };
    default:
      return state;
  }
};

export function FrequencyProvider({ children }) {
  const [state, dispatch] = useReducer(FrequencyReducer, {
    frequency: "weekly",
  });

  const changeFrequency = (frequency) => {
    dispatch({ type: "CHANGE_FREQUENCY", payload: frequency });
  };

  //custom logic
  return (
    <FrequencyContext.Provider value={{ ...state, changeFrequency }}>
      {children}
    </FrequencyContext.Provider>
  );
}
