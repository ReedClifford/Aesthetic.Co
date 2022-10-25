import { createContext, useState } from "react";
export const DropdownContext = createContext({
  isActive: false,
  setIsActive: () => {},
});

export const DropdownProvider = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const values = { isActive, setIsActive };
  return (
    <DropdownContext.Provider value={values}>
      {children}
    </DropdownContext.Provider>
  );
};
