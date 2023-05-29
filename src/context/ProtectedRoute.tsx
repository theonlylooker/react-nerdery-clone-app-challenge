import { FC, useEffect, useState } from "react";
import { UnauthorizedHome } from "../unathorizedHome";
import { AuthorizedHome } from "../authorizedHome/";

const ProtectedRoute = () => {
  // const [authorized, setAuthorized] = useState<null | string>();
  // useEffect(() => {
  // }, [localStorage.getItem("airbnbToken")]);
  const user = localStorage.getItem("airbnbToken");
  if (!user) {
    return <UnauthorizedHome />;
  }
  return <AuthorizedHome />;
};

export default ProtectedRoute;
