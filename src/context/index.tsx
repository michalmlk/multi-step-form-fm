import { createContext } from 'react';
import { DEFAULT_FORM_VALUES } from '../components/config';

const FormStateContext = createContext({
    currentStep: 0,
    setCurrentStep: (step: number) => {
    },
    formState: DEFAULT_FORM_VALUES,
    setFormState: (
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        state: typeof DEFAULT_FORM_VALUES | ((form: typeof DEFAULT_FORM_VALUES) => typeof DEFAULT_FORM_VALUES),
    ) => {
    },
    handleNextStep: () => {
    },
    handlePreviousStep: () => {
    },
});

export default FormStateContext;

