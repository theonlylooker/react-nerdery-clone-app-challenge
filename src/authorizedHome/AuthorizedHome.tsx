import React, { useContext } from "react";
import { UserContext } from "../context/Context";

const AuthorizedHome = () => {
  const first = useContext(UserContext);
  return <div>Welcome {first.user.email}</div>;
};

export default AuthorizedHome;
