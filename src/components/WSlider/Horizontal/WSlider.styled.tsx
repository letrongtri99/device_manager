import styled from '@emotion/styled';
import { Box, Slider } from '@material-ui/core';

export const WSliderThumb = styled(Box)`
  background-color: transparent;
  width: ${({ theme }) => theme.spacing(4)}px;
  height: ${({ theme }) => theme.spacing(4)}px;
  line-height: 0;
  margin-left: ${({ theme }) => theme.spacing(-2)}px;
  margin-top: ${({ theme }) => theme.spacing(-1)}px;
  border-radius: 0;
`;

export const WSliderThumbLabelContainer = styled(Box)`
  background-color: ${({ theme }) => theme.palette.common.white};
  z-index: 10;
`;

interface WSliderHorizontalContainerProps {
  trackType?: 'linear' | 'grow';
  cusorType?: 'dot' | 'liquid';
}

export const WSliderHorizontalContainer = styled(Slider)<React.ComponentProps<typeof Slider> & WSliderHorizontalContainerProps>`
  .MuiSlider-rail,
  .MuiSlider-track {
    height: ${({ trackType, theme }) => (trackType === 'grow' ? theme.spacing(2) : theme.spacing(1))}px;
    background-color: ${({ theme }) => theme.palette.grey[200]};
  }
  .MuiSlider-rail {
    opacity: 1;
    ${({ trackType }) => (trackType === 'grow' ? 'border-radius: 0 999px 999px 0; clip-path: polygon(0 80%, 100% 0, 100% 100%, 0 100%);' : 'border-radius: 999px; height: 6px; bottom: 0')};
  }
  .MuiSlider-thumb {
    ${({ trackType, theme }) => (trackType === 'grow' ? `margin-top: ${theme.spacing(-0.5)}px` : `margin-top: ${theme.spacing(0)}px`)};
    cursor: grab;
    &.MuiSlider-active,
    &:hover,
    &:focus {
      box-shadow: none;
    }
  }
  .MuiSlider-track {
    display: none;
  }
  .MuiSlider-mark,
  .MuiSlider-markActive {
    height: ${({ theme }) => theme.spacing(1)}px;
    opacity: 0;
  }
  .MuiSlider-markLabel,
  .MuiSlider-markLabelActive {
    top: ${({ theme }) => theme.spacing(5)}px;
    font-size: 14px;
    color: ${({ theme }) => theme.palette.black[100]};
  }
  .MuiSlider-markLabel[data-index='0'] {
    left: 20px !important;
  }
  .MuiSlider-markLabel[data-index='1'] {
    left: calc(100% - 20px) !important;
  }
`;
