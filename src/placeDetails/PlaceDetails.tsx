import React from "react";
import { useParams } from "react-router-dom";
import PlaceDate from "../placeDate/PlaceDate";

const PlaceDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <div>Place Header component</div>
      <div>place Information component</div>
      <div>place Host component</div>
      <div>Place About component</div>
      <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <PlaceDate />
      </div>
    </div>
  );
};

export default PlaceDetails;
