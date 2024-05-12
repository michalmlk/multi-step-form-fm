import { FunctionComponent, ReactElement, useContext } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import FormStateContext from '../../../../context';
import { FORM_STEPS } from '../../../config';

const StepComponent: FunctionComponent = (): ReactElement => {

    const { currentStep } = useContext(FormStateContext);
    return (
        <Stepper activeStep={currentStep}>
            {FORM_STEPS.map((step, idx) => (
                <Step key={idx}>
                    <StepLabel>{step.title}</StepLabel>
                </Step>
            ))}
        </Stepper>
    );
};

export default StepComponent;