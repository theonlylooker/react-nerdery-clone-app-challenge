import React, { FC, useState, createContext } from "react";
import { UserCtxState } from "../shared/types/types";

const user: UserCtxState = {
  email: "",
  id: "",
  wishlists: [],
};

const userDefaultValue: {
  user: UserCtxState | null;
  setUser: (state: UserCtxState | null) => void;
} = {
  user: user,
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
