import { DatasetComponentOption } from 'echarts';

export type DatasetOption = {
  source?: any[][];
  transform?: Transform | PipedTransform;
} & Omit<DatasetComponentOption, 'source' | 'transform'>;
export type DataValue = string | number | boolean | Date;

/*<-- START TRANSFORM -->*/

export type Transform = (FilterTransform | SortTransform) & {
  print?: boolean;
};

export type PipedTransform = Transform[];

export type DimensionName = string;
export type DimensionIndex = number;

/*<-- START TRANSFORM -->*/

/*<-- START FILTER TRANSFORM -->*/

export type FilterTransform = {
  type: 'filter';
  config: FilterTransformConfig;
};

export type FilterTransformConfig = FilterExpression | LogicalFilterExpression;

export type FilterExpressionOp = 'eq' | 'ne' | 'gt' | 'gte' | 'lt' | 'lte';

export type FilterExpression = {
  dimension: DimensionName | DimensionIndex;
  parser?: 'time' | 'trim' | 'number';
  reg?: RegExp | string;
} & Partial<Record<FilterExpressionOp, DataValue>>;

export type LogicalFilterExpression = {
  and?: FilterTransformConfig[];
  or?: FilterTransformConfig[];
  not?: FilterTransformConfig;
};

/*<-- END FILTER TRANSFORM -->*/

/*<-- START SORT TRANSFORM -->*/

export type SortTransform = {
  type: 'sort';
  config: SortTransformConfig | SortTransformConfig[];
};

export type SortTransformConfig = {
  dimension: DimensionName | DimensionIndex;
  order: 'asc' | 'desc';
  incomparable?: 'min' | 'max';
  parser?: 'time' | 'trim' | 'number';
};

/*<-- END SORT TRANSFORM -->*/
