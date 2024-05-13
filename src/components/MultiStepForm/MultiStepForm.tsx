import { FunctionComponent, ReactElement, useContext, useMemo } from 'react';
import StepComponent from './components/StepComponent/StepComponent.tsx';
import { StyledFormWrapper } from './MultiStepForm.styles.tsx';
import { DEFAULT_FORM_VALUES, FORM_STEPS } from '../config';
import FormStateContext from '../../context';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';
import StepContent from '../steps/StepContent/StepContent.tsx';
import { StyledFormButtons } from '../ui/FormButtons.styles.tsx';

import * as yup from 'yup';


const MultiStepForm: FunctionComponent = (): ReactElement => {

    const { currentStep, handleNextStep, handlePreviousStep, showSummary } = useContext(FormStateContext);

    const onSubmit = (data: any): void => {
        alert(JSON.stringify(data));
        handleNext();
    };

    const schema = [
        yup.object({
            firstName: yup.string().required('First name is required'),
            lastName: yup.string().required('Last name is required'),
            email: yup.string().email().required('Email is required'),
        }),
        yup.object({
            plan: yup.string().required('Plan is required'),
            payment: yup.string().required('Payment is required'),
        }),
    ];

    const activeStepValidationSchema = schema[currentStep];

    const methods = useForm({
        shouldUnregister: false,
        defaultValues: DEFAULT_FORM_VALUES,
        // @ts-ignore
        resolver: yupResolver(activeStepValidationSchema),
        mode: 'onChange',
    });

    const {
        handleSubmit, trigger, formState: { isSubmitted },
    } = methods;

    const handleNext = async (): Promise<void> => {
        const isCurrentStepValid = await trigger();

        if (isCurrentStepValid && currentStep < FORM_STEPS.length - 1) {
            handleNextStep();
        }
    };

    const isNextButtonDisabled = useMemo(() => {
        return currentStep === FORM_STEPS.length - 1;
    }, [currentStep]);

    return (
        <StyledFormWrapper>
            <StepComponent />
            <FormProvider {...methods}>
                <form>
                    {<StepContent step={currentStep} />}
                    {!isSubmitted && <StyledFormButtons currentStep={currentStep}>
                        {currentStep !== FORM_STEPS.length - 1 &&
                            <Button onClick={handleNext} variant="contained"
                                    disabled={isNextButtonDisabled}>Next</Button>}
                        {currentStep === FORM_STEPS.length - 1 &&
                            <Button onClick={handleSubmit(onSubmit)}
                                    variant="contained">Submit</Button>}
                        {currentStep !== 0 &&
                            <Button onClick={handlePreviousStep} variant="outlined">Previous</Button>}
                    </StyledFormButtons>}
                </form>
            </FormProvider>
        </StyledFormWrapper>
    );
};


export default MultiStepForm;