import React, { Fragment } from 'react';
import { Box } from '@material-ui/core';
import { DotStep, HorizontalLine } from './ProcessStep.styled';

export interface ProcessStepProps {
  numberOfSteps?: number;
  step?: number;
}

const ProcessStep = ({ numberOfSteps, step = 0 }: ProcessStepProps) => {
  return (
    <Box display="flex" alignItems="center">
      {Array(numberOfSteps)
        .fill(1)
        .map((v, i) => (
          <Fragment key={v + i}>
            {i !== 0 && <HorizontalLine $isActive={i < step} />}
            <DotStep key={v + i} $isActive={i + 1 <= step} />
          </Fragment>
        ))}
    </Box>
  );
};

export default ProcessStep;
