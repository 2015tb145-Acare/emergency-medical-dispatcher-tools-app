import { createContext, useState } from "react";

import { signInWithUsernameAndPassword } from "../MedicalDispatcherTools";

export const ApiContext = createContext();

export const ApiContexProvider = (props) => {
  const [token, setToken] = useState("");
  const [refresh_token, setRefresh_token] = useState("");
  const [error, setError] = useState("");

  const signIn = async (username, password) => {
    try {
      const { error, token, refresh_token } =
        await signInWithUsernameAndPassword(username, password);
      setToken(token);
      setRefresh_token(refresh_token);
      setError(error);
    } catch (error) {
      return error;
    }
  };

  return (
    <ApiContext.Provider value={{ signIn, error, token, refresh_token }}>
      {props.children}
    </ApiContext.Provider>
  );
};
