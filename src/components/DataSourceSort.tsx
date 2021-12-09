import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { SortTransformConfig } from '../models';
import {
  ChartSourceProvider,
  useChartSource,
  useChartConfig,
} from '../providers';
import { uuid } from '../utils/common';

export type ChartDataSourceProps = SortTransformConfig;

export const ChartDataSourceSort = ({
  children,
  ...props
}: PropsWithChildren<ChartDataSourceProps>) => {
  const { current: id } = useRef(uuid());
  const { id: fromDatasetId } = useChartSource();
  const [, updateConfig] = useChartConfig();

  useEffect(() => {
    updateConfig({
      dataset: {
        id,
        fromDatasetId,
        transform: { type: 'sort', config: { ...props } },
      },
    });
  }, [props.dimension]);

  return <ChartSourceProvider id={id}>{children}</ChartSourceProvider>;
};
