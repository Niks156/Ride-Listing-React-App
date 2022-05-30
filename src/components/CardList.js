import React, { useEffect, useState } from "react";
import axios from "axios";
import CardDetails from "./CardDetails";
import FilterListIcon from '@mui/icons-material/FilterList';
import '../css/cardlist.css'

export default function CardList() {
  
  const [rides, setRide] = useState([]);
  useEffect(() => {
    axios.get("https://assessment.api.vweb.app/rides").then((response) => {
      setRide(response.data);
    });
  }, []);
  return (
    <div className="liststyles">
      <div className="filter-flex">
        <ul>
          <li>Nearest rides</li>
          <li>Upcoming rides</li>
          <li className="flex-grow">Past rides</li>
          <li>
            <FilterListIcon/>
            {" "}Filter</li>
        </ul>
      </div>
      {rides &&
        rides.map((ride) => {
          return <CardDetails {...ride} key={ride.id} />;
        })}
    </div>
  );
}
