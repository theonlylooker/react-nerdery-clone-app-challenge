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
import { WishlistContext } from "../../context/WishlistContext";
import { ENDPOINT, WISHLIST } from "../../shared/API";

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
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const navigateTo = () => {
    navigate(`/place/${id}`);
  };
  const addWishList = async (
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
    if (user) {
      if (user.wishlists.length === 0) {
        handleModal();
      } else {
        try {
          const response = await axios.patch(
            `${ENDPOINT}${WISHLIST}/${user.wishlists[0]}`,
            {
              list: [
                ...wishlist[0].list,
                {
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
                },
              ],
            }
          );
          const data = await response.data;
          console.log(data);
          setWishlist([...wishlist, data]);
        } catch (error) {
          console.log("error en card");
        }
      }
    }
  };

  return (
    <CardContainer onClick={navigateTo}>
      <div className="image">
        <CardImage src={image} />
        <CardHeart onClick={addWishList} />
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
