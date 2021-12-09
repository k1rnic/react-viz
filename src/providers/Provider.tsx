import React, { createContext, FC, useContext } from 'react';

type ContextPayload = {};

const Context = createContext<ContextPayload | null>(null);

export const Provider: FC = ({ children }) => {
  const payload: ContextPayload = {};

  return <Context.Provider value={payload}>{children}</Context.Provider>;
};

export const useProvider = () => {
  const context = useContext(Context);

  if (!context) {
    console.error(`useProvider should be used in pair with Provider`);
  }

  return context as ContextPayload;
};
