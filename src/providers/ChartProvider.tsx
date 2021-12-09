import { Box } from '@mui/material';
import { ECharts, init } from 'echarts';
import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import useDimensions from 'react-cool-dimensions';

type ContextPayload = [
  ECharts,
  {
    readonly width: number;
    readonly height: number;
  },
];

const Context = createContext<ContextPayload | null>(null);

export const ChartProvider: FC = ({ children }) => {
  const ref = useRef<HTMLDivElement>();
  const { observe, width, height } = useDimensions({
    useBorderBoxSize: true,
  });

  const [chart, setChart] = useState<ECharts>();

  useEffect(() => {
    setChart(init(ref.current!));
    return () => chart?.dispose();
  }, []);

  useEffect(() => {
    chart?.resize();
  }, [chart, width, height]);

  const payload: ContextPayload = [chart!, { width, height }];

  return (
    <Context.Provider value={payload}>
      <Box
        width="100%"
        height="100%"
        ref={(el: HTMLDivElement) => {
          observe(el);
          ref.current = el;
        }}
      >
        {chart && children}
      </Box>
    </Context.Provider>
  );
};

export const useChart = () => {
  const context = useContext(Context);

  if (!context) {
    console.error(`useChart should be used in pair with ChartProvider`);
  }

  return context as ContextPayload;
};
