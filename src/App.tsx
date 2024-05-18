import { useState } from 'react';
import FormStateContext from './context';
import { DEFAULT_FORM_VALUES, FORM_STEPS } from './components/config';
import MultiStepForm from './components/MultiStepForm/MultiStepForm.tsx';

import './App.css';

function App() {

    const [formState, setFormState] = useState(DEFAULT_FORM_VALUES);
    const [currentStep, setCurrentStep] = useState(0);

    const handleNextStep = (): void => {
        setCurrentStep((prev) => prev + 1);
    };

    const handlePreviousStep = (): void => {
        setCurrentStep(prev => prev - 1);
    };

    return (
        <FormStateContext.Provider
            value={{
                formState,
                setFormState,
                handleNextStep,
                handlePreviousStep,
                currentStep,
                setCurrentStep,
            }}>
            <div className="main">
                <MultiStepForm />
            </div>
        </FormStateContext.Provider>
    );
}

export default App;
