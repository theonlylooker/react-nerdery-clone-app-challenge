import { createContext, useState, FC } from "react";
import { PlaceWithoutType } from "../authorizedHome/type";
import { Wishlist } from "../shared/types/types";

type WishlistItem = Omit<Wishlist, "userId">;

type WishlistCtx = WishlistItem[];

const initialWishlistState: WishlistCtx = [];

const wishlistDefaultValue = {
  wishlist: initialWishlistState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setWishlist: (state: WishlistCtx) => {},
};
export const WishlistContext = createContext(wishlistDefaultValue);

interface WishlistProvider {
  children: React.ReactElement;
}

export const WishlistProvider: FC<WishlistProvider> = ({ children }) => {
  const [wishlist, setWishlist] = useState(wishlistDefaultValue.wishlist);
  return (
    <WishlistContext.Provider value={{ wishlist, setWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};
