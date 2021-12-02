import { useContext } from "react";
import { FrequencyContext } from "../context/FrequencyContext";

export const useFrequency = () => {
  const context = useContext(FrequencyContext);

  if (context === undefined) {
    throw new Error("useFrequency() must be used inside a ThemeProvider");
  }

  return context;
};
