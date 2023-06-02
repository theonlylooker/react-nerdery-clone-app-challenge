import { useContext } from "react";
import { PlaceWithoutType } from "../../authorizedHome/type";
import { useParams } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistContext";
import { Card, CardGridContainter } from "../../authorizedHome";
import styled from "styled-components";

// interface WishlistDetail {
//   name: string;
//   list: PlaceWithoutType[];
// }

const WishlistDetaiLayout = styled.div`
  padding: 36px 24px;
`;
const WishlistDetailH1 = styled.h1`
  font-size: ${({ theme }) => `${theme.fontSize.xxxl}`};
  padding-bottom: 24px;
`;
export const WishlistDetail = () => {
  const { id } = useParams();
  const { wishlist } = useContext(WishlistContext);
  const currentWishlist = wishlist.find((current) => current.id === id);
  console.log(currentWishlist);
  return (
    <WishlistDetaiLayout>
      <WishlistDetailH1>{currentWishlist?.name}</WishlistDetailH1>
      <CardGridContainter>
        {currentWishlist?.list.map((place) => (
          <Card
            handleCurrent={() => {}}
            handleModal={() => {}}
            key={place.id}
            ownerId={place.ownerId}
            priceDay={place.priceDay}
            rating={place.rating}
            wished={Boolean(
              currentWishlist.list.find((element) => element.id === place.id)
            )}
            image={place.image}
            city={place.city}
            country={place.country}
            description={place.description}
            iconUser={place.iconUser}
            id={place.id}
          ></Card>
        ))}
      </CardGridContainter>
    </WishlistDetaiLayout>
  );
};
