import { createContext, useState, useEffect, FC, useContext } from "react";
import { PlaceWithoutType } from "../authorizedHome/type";
import { Wishlist } from "../shared/types/types";
import { ENDPOINT, WISHLIST } from "../shared/API";
import axios from "axios";
import { UserContext } from "./Context";

export type WishlistItem = Omit<Wishlist, "userId">;

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

export const useWishlistContext = (): {
  allElements: string[];
  addWishlistElement: (current: PlaceWithoutType) => void;
  deleteWishlistElement: (current: PlaceWithoutType) => void;
} => {
  const [allElements, setAllElements] = useState<string[]>([]);
  const { wishlist, setWishlist } = useContext(WishlistContext);
  const { user } = useContext(UserContext);

  const addWishlistElement = async (current: PlaceWithoutType) => {
    if (user) {
      try {
        const response = await axios.patch<Wishlist>(
          `${ENDPOINT}${WISHLIST}/${user.wishlists[0]}`,
          {
            list: [...wishlist[0].list, current],
          }
        );
        const data = await response.data;
        const newWishlist = [...wishlist];
        newWishlist[0].list = data.list;
        setWishlist(newWishlist);
      } catch (error) {
        console.log("error in card");
      }
    }
  };
  const deleteWishlistElement = async (current: PlaceWithoutType) => {
    if (user) {
      try {
        const response = await axios.patch(
          `${ENDPOINT}${WISHLIST}/${user.wishlists[0]}`,
          { list: wishlist[0].list.filter((place) => place.id !== current.id) }
        );
        const data = await response.data;
        const newWishlist = [...wishlist];
        newWishlist[0].list = data.list;
        setWishlist(newWishlist);
      } catch (error) {
        console.log("error");
      }
    }
  };

  useEffect(() => {
    wishlist.forEach((wishlist) => {
      wishlist.list.forEach((place) => {
        setAllElements([...allElements, place.id]);
      });
    });
  }, [wishlist]);

  return { allElements, addWishlistElement, deleteWishlistElement };
};
