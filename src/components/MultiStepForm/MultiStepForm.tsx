import { FunctionComponent, ReactElement, useContext } from 'react';
import StepComponent from './components/StepComponent/StepComponent.tsx';
import { FormFields, StyledFormWrapper } from './MultiStepForm.styles.tsx';
import { DEFAULT_FORM_VALUES, FORM_STEPS, schema } from '../config';
import FormStateContext from '../../context';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, IconButton } from '@mui/material';
import StepContent from '../steps/StepContent/StepContent.tsx';
import { StyledFormButtons } from '../ui/FormButtons.styles.tsx';
import { Summary } from '../ui/Summary.tsx';
import { Settings } from '@mui/icons-material';

const MultiStepForm: FunctionComponent = (): ReactElement => {

    const { currentStep, handleNextStep, handlePreviousStep, setIsEditorOpen } = useContext(FormStateContext);

    const onSubmit = async (data: any): Promise<void> => {
        alert(JSON.stringify(data));
    };

    const activeStepValidationSchema = schema[currentStep];

    const methods = useForm({
        shouldUnregister: false,
        defaultValues: DEFAULT_FORM_VALUES,
        // @ts-ignore
        resolver: yupResolver(activeStepValidationSchema),
        mode: 'onChange',
    });

    const {
        handleSubmit, trigger, formState: { isSubmitSuccessful, isValid },
    } = methods;

    const handleNext = async (): Promise<void> => {
        const isCurrentStepValid = await trigger();
        if (isCurrentStepValid) {
            handleNextStep();
        }
    };

    return (
        <StyledFormWrapper>
            {!isSubmitSuccessful && <StepComponent />}
            <FormProvider {...methods}>
                {isValid && isSubmitSuccessful ? <Summary /> : <FormFields>
                    {<StepContent step={currentStep} />}
                    {!isSubmitSuccessful && <StyledFormButtons currentStep={currentStep}>
                        {currentStep === FORM_STEPS.length - 1 &&
                            <Button onClick={handleSubmit(onSubmit)}
                                    variant="contained">Submit</Button>}
                        {currentStep !== 0 &&
                            <Button onClick={handlePreviousStep} variant="outlined">Previous</Button>}
                        {currentStep !== FORM_STEPS.length - 1 &&
                            <Button onClick={handleNext} variant="contained">Next</Button>}
                    </StyledFormButtons>}
                    <IconButton aria-label="settings" color="primary" onClick={() => setIsEditorOpen(true)}>
                        <Settings />
                    </IconButton>
                </FormFields>}
            </FormProvider>
        </StyledFormWrapper>
    );
};


export default MultiStepForm;