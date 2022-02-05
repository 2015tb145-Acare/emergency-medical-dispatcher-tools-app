import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider(props) {
  const [modalState, setModalState] = useState({
    signInModal: false,
  });

  const toggleModals = (modal) => {
    if (modal === "signIn") {
      setModalState({
        signInModal: true,
      });
    } else if (modal === "signUp") {
      setModalState({
        signInModal: false,
      });
    } else {
      setModalState({
        signInModal: false,
      });
    }
  };

  return (
    <AppContext.Provider value={{ modalState, toggleModals }}>
      {props.children}
    </AppContext.Provider>
  );
}
