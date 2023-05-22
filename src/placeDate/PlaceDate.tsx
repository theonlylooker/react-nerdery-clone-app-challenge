import React from "react";
import styled from "styled-components";

const PlaceDateLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: "fixed";
  border-top: 1px solid black;
`;

const PlaceButton = styled.div`
  color: white;
  font-size: 18px;
  background-color: red;
  padding: 10px;
  border-radius: 9px;
`;

const PlaceDate = () => {
  return (
    <PlaceDateLayout>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>price noche</div>
        <div>range date</div>
      </div>
      <PlaceButton>Reserva</PlaceButton>
    </PlaceDateLayout>
  );
};

export default PlaceDate;
