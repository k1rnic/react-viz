import { useEffect } from 'react';
import { TitleOption } from '../models';
import { useChartConfig } from '../providers';

type Props = TitleOption;

export const ChartTitle = (props: Props) => {
  const [, updateConfig] = useChartConfig();

  useEffect(() => {
    updateConfig({
      title: {
        left: 'center',
        ...props,
        textStyle: { fontSize: 14, overflow: 'breakAll', ...props?.textStyle },
      },
    });
  }, []);

  return null;
};
