import { createContext, useEffect, useState } from "react";
import {
  createUserRefDocAuth,
  onAuthStateChangedListener,
} from "../utls/firebase/firebase.utils";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  const callback = async (user) => {
    if (user) {
      createUserRefDocAuth(user);
    }

    setCurrentUser(user);
  };

  useEffect(() => {
    const unsub = onAuthStateChangedListener(callback);
    return unsub;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
