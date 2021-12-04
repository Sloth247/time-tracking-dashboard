//import { useState } from "react";
import { useFrequency } from "../hooks/useFrequency";

// react-router-dom
import { Link } from "react-router-dom";

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
      <Link
        to="?freq=daily"
        onClick={() => {
          changeFrequency("daily");
        }}
        className={frequency === "daily" ? "active" : ""}
        aria-current={frequency === "daily" ? "page" : ""}
      >
        Daily
      </Link>
      <Link
        to="?freq=weekly"
        onClick={() => {
          changeFrequency("weekly");
        }}
        className={frequency === "weekly" ? "active" : ""}
        aria-current={frequency === "weekly" ? "page" : ""}
      >
        Weekly
      </Link>
      <Link
        to="?freq=monthly"
        onClick={() => {
          changeFrequency("monthly");
        }}
        className={frequency === "monthly" ? "active" : ""}
        aria-current={frequency === "monthly" ? "page" : ""}
      >
        Monthly
      </Link>
    </div>
  );
}
