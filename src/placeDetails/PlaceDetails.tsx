import React from "react";
import { useParams } from "react-router-dom";
import PlaceHeader from "../placeHeader/PlaceHeader";

const PlaceDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <PlaceHeader />
      <div>place Information component</div>
      <div>place Host component</div>
      <div>Place About component</div>
      <div style={{ position: "fixed", bottom: 0 }}>
        Place Date Separation component
      </div>
    </div>
  );
};

export default PlaceDetails;
