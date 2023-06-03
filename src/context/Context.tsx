import React, {
  FC,
  useState,
  createContext,
  useContext,
  useEffect,
} from "react";
import { UserCtxState } from "../shared/types/types";
import { ENDPOINT, USERS, WISHLIST } from "../shared/API";
import axios from "axios";
import { WishlistContext } from "./WishlistContext";
import useAsync from "../hooks/useAsync";
import { updateUserWishlists } from "../AXIOS/functions";
const user: UserCtxState = {
  email: "",
  id: "",
  wishlists: [],
};

const user1: UserCtxState = localStorage.getItem("airbnbUser")
  ? JSON.parse(localStorage.getItem("airbnbUser") as string)
  : null;

const userDefaultValue: {
  user: UserCtxState | null;
  setUser: (state: UserCtxState | null) => void;
} = {
  user: user1,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUser: (state: UserCtxState | null) => {},
};

interface UserProvider {
  children: React.ReactElement;
}

export const UserContext = createContext(userDefaultValue);

export const UserProvider: FC<UserProvider> = ({ children }) => {
  const [user, setUser] = useState<UserCtxState | null>(userDefaultValue.user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = (): {
  addWishlist: (id: string) => void;
} => {
  const { user, setUser } = useContext(UserContext);

  const addWishlist = async (id: string) => {
    if (user) {
      try {
        const response = await axios.patch(`${ENDPOINT}${USERS}/${user.id}`, {
          wishlists: [...user.wishlists, id],
        });
        //useAsync(updateUserWishlists)
        setUser({
          ...user,
          wishlists: [...user.wishlists, id],
        });
      } catch (error) {
        console.log("error");
      }
    }
  };
  useEffect(() => {
    if (user) {
      localStorage.setItem("airbnbUser", JSON.stringify(user));
    }
  }, [user]);

  return { addWishlist };
};
