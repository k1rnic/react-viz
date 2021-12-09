import { EChartsOption, SeriesOption } from 'echarts';
import { DatasetOption } from '.';
import { XAxisOption, YAXisOption } from './axis';
import { AxisPointerOption } from './axis-pointer';
import { DataZoomOption } from './data-zoom';
import { GridOption } from './grid';
import { LegendOption } from './legend';
import { TitleOption } from './title';
import { TooltipOption } from './tooltip';
import { VisualMapOption } from './visual-map';

export type Config<T extends SeriesOption = SeriesOption> = {
  dataset?: DatasetOption | DatasetOption[];
  title?: TitleOption | TitleOption[];
  grid?: GridOption | GridOption[];
  xAxis?: XAxisOption | XAxisOption[];
  yAxis?: YAXisOption | YAXisOption[];
  tooltip?: TooltipOption | TooltipOption[];
  axisPointer?: AxisPointerOption | AxisPointerOption[];
  legend?: LegendOption | LegendOption[];
  dataZoom?: DataZoomOption | DataZoomOption[];
  visualMap?: VisualMapOption | VisualMapOption[];
  series?: T | T[];
} & Pick<EChartsOption, 'textStyle'>;
