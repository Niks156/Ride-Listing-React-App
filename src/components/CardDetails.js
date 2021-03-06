import { Grid } from "@mui/material";
import React from "react";
import "../css/App.css";
import dateFormat from "dateformat";

export default function CardDetails(props) {
  const { id, origin_station_code, station_path, date, state, city } = props;
  const ride_date = dateFormat(date, "dS mmm yyyy H:MM");

  return (
    <>
      <Grid container className="card-details">
        <Grid item xs={12} sm={6} md={3} sx={{ marginLeft: 0 }}>
          <img
            src={require("../img/map.png")}
            alt="map"
          ></img>
        </Grid>
        <Grid item xs={12} sm={3.5} md={6}>
          <div className="ride-stats">
            <ul>
              <li>Ride id : {id}</li>
              <li>Origin Station : {origin_station_code}</li>
              <li>station_path : [{station_path}]</li>
              <li>Date : {ride_date}</li>
              <li>Distance : </li>
            </ul>
          </div>
        </Grid>
        <Grid item xs={3} sm={2.5} md={3}>
          <div className="city-flex">
            <ul>
              <li>{state}</li>
              <li>{city}</li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </>
  );
}
