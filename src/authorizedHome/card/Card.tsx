import { FC, useContext } from "react";
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
import { UserContext } from "../../context/Context";
import axios from "axios";
import {
  WishlistContext,
  useWishlistContext,
} from "../../context/WishlistContext";
import { ENDPOINT, WISHLIST } from "../../shared/API";
import { PlaceWithoutType } from "../type";
import { Wishlist } from "../../shared/types/types";

export const Card: FC<cardProps> = ({
  handleModal,
  ownerId,
  id,
  iconUser,
  image,
  city,
  country,
  rating,
  description,
  priceDay,
  wished,
  handleCurrent,
}) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  //const { wishlist, setWishlist } = useContext(WishlistContext);
  const { addWishlistElement, deleteWishlistElement } = useWishlistContext();
  const navigateTo = () => {
    navigate(`/place/${id}`);
  };
  const handleWishList = async (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>
  ) => {
    e.stopPropagation();
    handleCurrent({
      city,
      country,
      description,
      image,
      iconUser,
      ownerId,
      id,
      priceDay,
      rating,
      wished,
    });
    if (wished) {
      deleteWishlistElement({
        city,
        country,
        description,
        image,
        iconUser,
        ownerId,
        id,
        priceDay,
        rating,
        wished,
      });
    } else {
      if (user) {
        if (user.wishlists.length === 0) {
          handleModal();
        } else {
          addWishlistElement({
            city,
            country,
            description,
            image,
            iconUser,
            ownerId,
            id,
            priceDay,
            rating,
            wished,
          });
        }
      }
    }
  };

  return (
    <CardContainer onClick={navigateTo}>
      <div className="image">
        <CardImage src={image} />
        <CardHeart wished={wished} onClick={handleWishList} />
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
