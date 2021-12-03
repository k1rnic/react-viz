import { SeriesOption } from 'echarts';
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
  dataset?: DatasetOption[];
  title?: TitleOption[];
  grid?: GridOption[];
  xAxis?: XAxisOption[];
  yAxis?: YAXisOption[];
  tooltip?: TooltipOption[];
  axisPointer?: AxisPointerOption[];
  legend?: LegendOption[];
  dataZoom?: DataZoomOption[];
  visualMap?: VisualMapOption[];
  series?: T[];
};
