import React, { FC, useState, createContext } from "react";

type userCtxState = {
  email: string;
  id: string;
  name?: string;
  picture?: string;
  reviews?: number;
  country?: number;
  type?: string;
  birthday?: Date;
  career?: string;
  estudy?: string;
  hobby?: string;
  resume?: string;
};

const user: userCtxState = {
  email: "",
  id: "",
};

interface UserProvider {
  children: React.ReactElement;
}

const userDefaultValue = {
  user: user,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUser: (state: userCtxState) => {},
};

export const UserContext = createContext(userDefaultValue);

export const UserProvider: FC<UserProvider> = ({ children }) => {
  const [user, setUser] = useState<userCtxState>(userDefaultValue.user);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
