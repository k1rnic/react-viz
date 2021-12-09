import React, { createContext, FC, useContext, useState } from 'react';
import { DatasetOption } from '../models';

type ContextPayload = DatasetOption;

const Context = createContext<ContextPayload | null>(null);

type ChartSourceProviderProps = DatasetOption;

export const ChartSourceProvider: FC<ChartSourceProviderProps> = ({
  children,
  ...props
}) => {
  const [payload] = useState<ContextPayload>(props);

  return <Context.Provider value={payload}>{children}</Context.Provider>;
};

export const useChartSource = () => {
  const context = useContext(Context);

  if (!context) {
    console.error(
      `useChartSource should be used in pair with ChartSourceProvider`,
    );
  }

  return context as ContextPayload;
};
