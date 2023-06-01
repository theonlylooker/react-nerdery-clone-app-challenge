import { useContext } from "react";
import { PlaceWithoutType } from "../../authorizedHome/type";
import { useParams } from "react-router-dom";
import { WishlistContext } from "../../context/WishlistContext";
import { Card, CardGridContainter } from "../../authorizedHome";
import styled from "styled-components";

interface WishlistDetail {
  name: string;
  list: PlaceWithoutType[];
}

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
  const current = wishlist.find((current) => current.id === id);
  return (
    <WishlistDetaiLayout>
      <WishlistDetailH1>{current?.name}</WishlistDetailH1>
      <CardGridContainter>
        {current?.list.map((item) => (
          <Card
            handleCurrent={() => {}}
            handleModal={() => {}}
            key={item.id}
            ownerId={item.ownerId}
            priceDay={item.priceDay}
            rating={item.rating}
            wished={item.wished}
            image={item.image}
            city={item.city}
            country={item.country}
            description={item.description}
            iconUser={item.iconUser}
            id={item.id}
          ></Card>
        ))}
      </CardGridContainter>
    </WishlistDetaiLayout>
  );
};
