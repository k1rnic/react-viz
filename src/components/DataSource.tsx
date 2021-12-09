import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { DatasetOption } from '../models';
import { ChartSourceProvider, useChartConfig } from '../providers';
import { uuid } from '../utils/common';

export type ChartDataSourceProps = Pick<DatasetOption, 'source' | 'dimensions'>;

export const ChartDataSource = ({
  source,
  dimensions,
  children,
}: PropsWithChildren<ChartDataSourceProps>) => {
  const { current: id } = useRef(uuid());
  const [, updateConfig] = useChartConfig();

  useEffect(() => {
    updateConfig({ dataset: { id, source, dimensions } });
  }, [source, dimensions]);

  return (
    <ChartSourceProvider id={id} source={source} dimensions={dimensions}>
      {children}
    </ChartSourceProvider>
  );
};
