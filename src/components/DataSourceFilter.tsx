import React, { PropsWithChildren, useEffect, useRef } from 'react';
import { FilterExpression } from '../models';
import {
  ChartSourceProvider,
  useChartSource,
  useChartConfig,
} from '../providers';
import { uuid } from '../utils/common';

export type ChartDataSourceProps = FilterExpression;

export const ChartDataSourceFilter = ({
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
        transform: { type: 'filter', config: { ...props } },
      },
    });
  }, [props.dimension]);

  return <ChartSourceProvider id={id}>{children}</ChartSourceProvider>;
};
