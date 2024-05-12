import { FunctionComponent, ReactElement, useContext, useMemo } from 'react';
import StepComponent from './components/StepComponent/StepComponent.tsx';
import { StyledFormWrapper } from './MultiStepForm.styles.tsx';
import { DEFAULT_FORM_VALUES, FORM_STEPS } from '../config';
import * as yup from 'yup';
import FormStateContext from '../../context';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button } from '@mui/material';


const MultiStepForm: FunctionComponent = (): ReactElement => {

    const { currentStep, handleNextStep, handlePreviousStep } = useContext(FormStateContext);

    const onSubmit = (data): void => {
        console.log(JSON.stringify(data));
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
        shouldUnregister: true,
        defaultValues: DEFAULT_FORM_VALUES,
        // @ts-ignore
        resolver: yupResolver(activeStepValidationSchema),
        mode: 'onChange',
    });

    const {
        handleSubmit, trigger,
    } = methods;

    const handleNext = async (): Promise<void> => {
        const isCurrentStepValid = await trigger();
        console.log(isCurrentStepValid);
        if (isCurrentStepValid) {
            handleNextStep();
        }
    };

    const isNextButtonDisabled = useMemo(() => {
        return currentStep === FORM_STEPS.length - 1;
    }, [currentStep, FORM_STEPS]);

    const getStepContent = (): ReactElement => {
        return FORM_STEPS[currentStep].component;
    };

    return (
        <StyledFormWrapper>
            <StepComponent />
            <FormProvider {...methods}>
                <form>
                    {getStepContent()}
                    <div>
                        {currentStep !== FORM_STEPS.length - 1 &&
                            <Button onClick={handleNext} variant="contained"
                                    disabled={isNextButtonDisabled}>Next</Button>}
                        {currentStep === FORM_STEPS.length - 1 &&
                            <Button onClick={() => handleSubmit(onSubmit)} variant="contained">Submit</Button>}
                        {currentStep !== 0 &&
                            <Button onClick={handlePreviousStep} variant="outlined">Previous</Button>}
                    </div>
                </form>
            </FormProvider>
        </StyledFormWrapper>
    );
};


export default MultiStepForm;