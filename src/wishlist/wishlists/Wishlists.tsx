import React, { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";
import { Link, useNavigate } from "react-router-dom";
import { WISHLIST } from "../../shared/API";
import WishlistCard from "../wishlistCard/WishlistCard";
export const Wishlists = () => {
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`${WISHLIST}/${id}`);
  };
  return (
    <div>
      {wishlist.map((list) => (
        //<div onClick={() => handleClick(list.id)}> {list.name} </div>
        <Link to={`/wishlist/${list.id}`}>
          <WishlistCard name={list.name} itemsCount={list.list.length} />
        </Link>
      ))}
    </div>
  );
};
