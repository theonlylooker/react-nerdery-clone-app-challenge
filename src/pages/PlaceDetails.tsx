import React from "react";
import { useParams } from "react-router-dom";
import PlaceHeader from "../placeHeader/PlaceHeader";

const PlaceDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <div>Place Header component</div>
      <PlaceDetails />
      <div>place Host component</div>
      <div>Place About component</div>
      <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <PlaceDate />
      </div>
    </div>
  );
};

export default PlaceDetails;
