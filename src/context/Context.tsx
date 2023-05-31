import React, { FC, useState, createContext } from "react";
import { UserCtxState } from "../shared/types/types";

const user: UserCtxState = {
  email: "",
  id: "",
  wishlists: [],
};

interface UserProvider {
  children: React.ReactElement;
}

const userDefaultValue = {
  user: user,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUser: (state: UserCtxState) => {},
};

export const UserContext = createContext(userDefaultValue);

export const UserProvider: FC<UserProvider> = ({ children }) => {
  const [user, setUser] = useState<UserCtxState>(userDefaultValue.user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
