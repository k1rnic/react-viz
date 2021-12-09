import React, { FC, PropsWithChildren, useEffect } from 'react';
import { Config } from '../../models';
import {
  ChartConfigProvider,
  ChartProvider,
  useChartConfig,
} from '../../providers';

export type ChartProps = {};

const defaultOptions: Config = {
  textStyle: {
    fontFamily: '"OpenSans", Arial',
  },
};

const ChartRoot: FC<ChartProps> = ({ children }) => {
  const [, updateConfig] = useChartConfig();

  useEffect(() => {
    updateConfig(defaultOptions);
  }, []);

  return <>{children}</>;
};

export const Chart = ({
  children,
  ...props
}: PropsWithChildren<ChartProps>) => (
  <ChartProvider>
    <ChartConfigProvider>
      <ChartRoot {...props}>{children}</ChartRoot>
    </ChartConfigProvider>
  </ChartProvider>
);
