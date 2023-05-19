import React, { FC } from "react";
import { ReactComponent as Star } from "../assets/star.svg";
import {
  CardContainer,
  CardContent,
  CardHeart,
  CardImage,
  CardInfo,
  CardRating,
  CardSpanDefault,
  CardSpanSecondary,
} from "./styles";
import { Card as cardProps } from "./type";

const Card: FC<cardProps> = ({
  ownerId,
  iconUser,
  image,
  city,
  country,
  rating,
  description,
  priceDay,
  wished,
}) => {
  return (
    <CardContainer onClick={() => alert("hola")}>
      <div className="image">
        <CardImage src={image} />
        <CardHeart />
      </div>
      <CardContent>
        <CardInfo>
          <div className="info">
            <CardSpanDefault display="block">
              {city},{country}
            </CardSpanDefault>
            <CardSpanSecondary display="block">{description}</CardSpanSecondary>
            <CardSpanSecondary display="block">Oct 23 - 28</CardSpanSecondary>
          </div>
          <div className="price">
            <CardSpanDefault>${priceDay} </CardSpanDefault>
            night
          </div>
        </CardInfo>
        <div className="rating">
          <CardRating>
            <Star />
            <span>{rating}</span>
          </CardRating>
        </div>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
