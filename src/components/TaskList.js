// import { useState } from "react";

import "./TaskList.scss";

import Dot from "../assets/icon-ellipsis.svg";
import { useFetch } from "../hooks/useFetch";
import { useFrequency } from "../hooks/useFrequency";

//import data from "../data.json";

//images


// styles


export default function TaskList() {
  // const [url, setUrl] = useState("http://localhost:3000/stats");
  const { data, isPending, error } = useFetch("/data.json");

  const { frequency } = useFrequency();
  const urlDot = "#";
  return (
    <div className="main__inner">
      {isPending && <div>Loading stats...</div>}
      {error && <div>{error}</div>}
      <ul className="main__task-list">
        {data &&
          data.stats.map((stat) => (
            <li
              className={
                stat.title === "Self Care"
                  ? "main__task-item selfcare"
                  : `main__task-item ${stat.title.toLowerCase()}`
              }
              key={stat.id}
            >
              <div className="main__task-item-container">
                <h3 className="main__task-title">{stat.title}</h3>
                <a href={urlDot} className="main__task-dot">
                  <img src={Dot} alt="more details" />
                </a>
                <span className="main__task-current">
                  {/* {frequency === "daily"
                    ? stat.timeframes.daily.current
                    : frequency === "weekly"
                    ? stat.timeframes.weekly.current
                    : stat.timeframes.monthly.current}
                  hrs */}
                  {stat.timeframes[frequency].current}hrs
                </span>
                <span className="main__task-previous">
                  {frequency === "daily"
                    ? "Yesterday"
                    : frequency === "weekly"
                    ? "Last Week"
                    : "Last Month"}{" "}
                  -{" "}
                  {
                    /* {frequency === "daily"
                    ? stat.timeframes.daily.previous
                    : frequency === "weekly"
                    ? stat.timeframes.weekly.previous
                    : stat.timeframes.monthly.previous} */
                    stat.timeframes[frequency].previous
                  }
                  hrs
                </span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
