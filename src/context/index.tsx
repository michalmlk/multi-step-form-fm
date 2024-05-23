import { createContext } from 'react';
import { DEFAULT_FORM_VALUES, FormValues } from '../components/config';


const FormStateContext = createContext({
    currentStep: 0,
    setCurrentStep: (step: number) => {
    },
    formState: DEFAULT_FORM_VALUES,
    setFormState: (
        // eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
        state: FormValues | ((form: FormValues) => FormValues),
    ) => {
    },
    handleNextStep: () => {
    },
    handlePreviousStep: () => {
    },
    isEditorOpen: false,
    setIsEditorOpen: (isEditorOpen: boolean) => {
    },
});

export default FormStateContext;