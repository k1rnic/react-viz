import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useChart } from '.';
import { Config } from '../models';

type ContextPayload = [config: Config, updateConfig: (o: Config) => void];

const Context = createContext<ContextPayload | null>(null);

export const ChartConfigProvider: FC = ({ children }) => {
  const [chart] = useChart();
  const [config, setConfig] = useState<Config>({});

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('[DEBUG] Chart:', config);
    }
  }, [config]);

  const handleUpdateConfig = useCallback((option: Config) => {
    chart.setOption(option);
    setConfig(chart.getOption() as Config);
  }, []);

  const payload = useMemo<ContextPayload>(
    () => [config, handleUpdateConfig],
    [config, handleUpdateConfig],
  );

  return <Context.Provider value={payload}>{children}</Context.Provider>;
};

export const useChartConfig = () => {
  const context = useContext(Context);

  if (!context) {
    console.error(
      `useChartConfig should be used in pair with ChartConfigProvider`,
    );
  }

  return context as ContextPayload;
};
