import { FC } from "react";
import { Star } from "../../assets";
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

export const Card: FC<cardProps> = ({
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
