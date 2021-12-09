import { ComponentMeta, ComponentStory } from '@storybook/react';
import { useEffect, useState } from 'react';
import { SOURCE } from '../../mock/source';
import { ChartDataSource } from '../DataSource';
import { ChartDataSourceFilter } from '../DataSourceFilter';
import { ChartDataSourceSort } from '../DataSourceSort';
import { ChartTitle } from '../Title';
import { Chart } from './Chart';

export default {
  title: 'Chart',
  component: Chart,
  args: {},
} as ComponentMeta<typeof Chart>;

const TITLE = 'hey ho';
const DIMENSIONS = ['category', 'value'];

export const Base: ComponentStory<typeof Chart> = (args) => {
  const [source, setSource] = useState<any[][]>([]);

  useEffect(() => {
    setTimeout(() => {
      setSource(SOURCE);
    }, 2500);
  }, []);

  return (
    <Chart {...args}>
      <ChartTitle text={TITLE} />
      <ChartDataSource dimensions={DIMENSIONS} source={source}>
        <ChartDataSourceSort dimension="value" order="asc">
          <ChartDataSourceFilter
            dimension="category"
            eq="some"
          ></ChartDataSourceFilter>
          <ChartDataSourceFilter
            dimension="category"
            eq="other"
          ></ChartDataSourceFilter>
        </ChartDataSourceSort>
      </ChartDataSource>
    </Chart>
  );
};
