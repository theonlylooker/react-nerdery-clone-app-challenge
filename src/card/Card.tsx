import React from "react";
import { ReactComponent as Heart } from "../assets/heart.svg";
import { ReactComponent as Star } from "../assets/star.svg";
import { useNavigate } from "react-router-dom";
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
  placeId,
  iconUser,
  image,
  city,
  country,
  rating,
  description,
  priceDay,
  wished,
}) => {
  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(`/place/${placeId}`);
  };
  return (
    <CardContainer onClick={navigateTo}>
      <div className="image">
        <CardImage src="https://picsum.photos/400/350" />
        <CardHeart />
      </div>
      <CardContent>
        <CardInfo>
          <div className="info">
            <CardSpanDefault display="block">
              Groveland, California
            </CardSpanDefault>
            <CardSpanSecondary display="block">
              Yosemite National Park
            </CardSpanSecondary>
            <CardSpanSecondary display="block">Oct 23 - 28</CardSpanSecondary>
          </div>
          <div className="price">
            <CardSpanDefault>$289</CardSpanDefault>
            night
          </div>
        </CardInfo>
        <div className="rating">
          <CardRating>
            <Star />
            <span>4.91</span>
          </CardRating>
        </div>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
