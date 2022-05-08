import { useContext, useEffect } from "react";
import { AppContext } from "../../Context";
const Auth = () => {
  const { authenticate } = useContext(AppContext);
  useEffect(() => {
    authenticate();
  });

  return null;
};

export default Auth;
