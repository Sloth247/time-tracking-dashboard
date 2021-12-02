//import { useState } from "react";
import { useFrequency } from "../hooks/useFrequency";

// Styles
import "./FrequencySelector.scss";

export default function FrequencySelector() {
  const { changeFrequency, frequency } = useFrequency();
  //const [ariaExpanded, setAriaExpanded] = useState("false");
  // const handleClick = () => {
  //   changeFrequency({ frequency });
  //   setAriaExpanded(ariaExpanded === "false" ? "true" : "false");
  // };

  return (
    <div className="header__switches">
      <button
        aria-expanded={frequency === "daily" ? "true" : "false"}
        onClick={() => {
          changeFrequency("daily");
        }}
        className={frequency === "daily" ? "active" : ""}
      >
        Daily
      </button>
      <button
        aria-expanded={frequency === "weekly" ? "true" : "false"}
        onClick={() => {
          changeFrequency("weekly");
        }}
        className={frequency === "weekly" ? "active" : ""}
      >
        Weekly
      </button>
      <button
        aria-expanded={frequency === "monthly" ? "true" : "false"}
        onClick={() => {
          changeFrequency("monthly");
        }}
        className={frequency === "monthly" ? "active" : ""}
      >
        Monthly
      </button>
    </div>
  );
}
