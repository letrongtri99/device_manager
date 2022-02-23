import CircleThumbIcon from '@components/icons/CircleThumb';
import OvalThumbIcon from '@components/icons/OvalThumb';
import { Slider } from '@material-ui/core';
import React, { ReactNode, useMemo, useState } from 'react';
import { WSliderHorizontalContainer, WSliderThumb } from './WSlider.styled';

interface WSliderHorizontalProps {
  data: Array<number>;
  formatLabel?: (val: number, index?: number) => ReactNode;
  cusorType?: 'circle' | 'oval';
  trackType?: 'linear' | 'grow';
}

const WSliderHorizontal = ({ data, formatLabel, cusorType = 'circle', trackType, ...props }: WSliderHorizontalProps & Omit<React.ComponentProps<typeof Slider>, 'marks'>) => {
  const marks = useMemo(() => {
    return data?.map((val, index) => ({ value: val, label: formatLabel ? formatLabel(val, index) : val }));
  }, [data, formatLabel]);

  const [value, setValue] = useState(1);
  const trackGrow = useMemo(() => 32 - 20 * value, [value]);

  return (
    <>
      <svg style={{ visibility: 'hidden', position: 'absolute' }} width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="round">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix in="StrokePaint" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      <WSliderHorizontalContainer
        trackType={trackType}
        ThumbComponent={(props) => {
          return (
            <WSliderThumb component="span" {...props}>
              {cusorType === 'circle' ? <CircleThumbIcon height={trackType === 'grow' ? trackGrow : 32} width={trackType === 'grow' ? trackGrow : 32} /> : <OvalThumbIcon height={trackType === 'grow' ? trackGrow : 32} width={trackType === 'grow' ? trackGrow : 32} />}
            </WSliderThumb>
          );
        }}
        min={data[0]}
        max={data[data.length - 1]}
        valueLabelDisplay="on"
        marks={marks}
        onChange={(e, val) => {
          trackType === 'grow' && setValue(1 - (Number(val || data[1]) - data[0]) / (data[1] - data[0]));
          props.onChange?.(e, val);
        }}
        {...props}
      />
    </>
  );
};

export default WSliderHorizontal;
