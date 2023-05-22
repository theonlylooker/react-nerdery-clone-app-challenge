import React from "react";
import { useParams } from "react-router-dom";
import PlaceHeader from "../placeHeader/PlaceHeader";
import PlaceDate from "../placeDate/PlaceDate";
import PlaceHost from "../placeHost/PlaceHost";

const PlaceDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <PlaceHeader />
      <div>place Information component</div>
      <PlaceHost />
      <div>Place About component</div>
      <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
        <PlaceDate />
      </div>
    </div>
  );
};

export default PlaceDetails;
