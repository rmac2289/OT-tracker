import React, { createContext, SetStateAction, useState } from "react";

interface Props {}

export const ModalContext = createContext<unknown>(null);

export const ModalContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [fadeBackground, setFadeBackground] = useState(false);

  return (
    <ModalContext.Provider value={[fadeBackground, setFadeBackground]}>
      {children}
    </ModalContext.Provider>
  );
};
