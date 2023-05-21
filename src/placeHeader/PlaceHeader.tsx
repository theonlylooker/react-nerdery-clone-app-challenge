import React from "react";
import { ReactComponent as LeftArrow } from "../assets/leftArrow.svg";
import { ReactComponent as Share } from "../assets/share.svg";
import { ReactComponent as Heart } from "../assets/heart.svg";
import styled from "styled-components";

const PlaceHeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  div {
    display: flex;
    gap: 10px;
    align-items: center;
  }
`;

const PlaceHeader = () => {
  return (
    <PlaceHeaderLayout>
      <div>
        <LeftArrow />
        <div>Alojamientos</div>
      </div>
      <div>
        <Share />
        <Heart />
      </div>
    </PlaceHeaderLayout>
  );
};

export default PlaceHeader;
