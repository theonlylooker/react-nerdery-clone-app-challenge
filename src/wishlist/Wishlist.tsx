import React, { useContext } from "react";
import styled from "styled-components";
import { Empty } from ".";
import { WishlistContext } from "../context/WishlistContext";
import { Wishlists } from "./wishlists/Wishlists";

const WishlistLayout = styled.div`
  padding: 36px 24px;
`;

const WishlistH1 = styled.h1`
  font-size: ${({ theme }) => `${theme.fontSize.larger}`};
  margin-bottom: 32px;
  font-weight: ${({ theme }) => `${theme.weight.base}`};
`;

export const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);
  return (
    <WishlistLayout>
      <WishlistH1>Wishlists</WishlistH1>
      {wishlist.length ? <Wishlists /> : <Empty />}
    </WishlistLayout>
  );
};
