import React from "react";
import CardDetails from "./CardDetails";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Ride } from "../Data";
import "../css/cardlist.css";

export default function CardList() {
  return (
    <div className="liststyles">
      <div className="filter-flex">
        <ul>
          <li>Nearest rides</li>
          <li>Upcoming rides</li>
          <li className="flex-grow">Past rides</li>
          <li>
            <FilterListIcon /> Filter
          </li>
        </ul>
      </div>
      {Ride &&
        Ride.map((ride) => {
          return <CardDetails {...ride} key={ride.id} />;
        })}
    </div>
  );
}
