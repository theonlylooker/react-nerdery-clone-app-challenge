import { FC, useEffect, useState } from "react";
import { UnauthorizedHome } from "../unathorizedHome";
import AuthorizedHome from "../authorizedHome/AuthorizedHome";

const ProtectedRoute = () => {
  // const [authorized, setAuthorized] = useState<null | string>();
  // useEffect(() => {
  // }, [localStorage.getItem("airbnbToken")]);
  const user = localStorage.getItem("airbnbToken");
  if (!user) {
    console.log("no usuario");
    return <UnauthorizedHome />;
  }
  console.log("si usuario");
  return <AuthorizedHome />;
};

export default ProtectedRoute;
