import { useState } from 'react';
import FormStateContext from './context';
import { DEFAULT_FORM_VALUES } from './components/config';
import MultiStepForm from './components/MultiStepForm/MultiStepForm.tsx';
import SchemaEditor from './components/SchemaEditor/SchemaEditor.tsx';

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

    const handleEditorClose = (): void => setIsEditorOpen(false);

    const [isEditorOpen, setIsEditorOpen] = useState(false);

    return (
        <FormStateContext.Provider
            value={{
                formState,
                setFormState,
                handleNextStep,
                handlePreviousStep,
                currentStep,
                setCurrentStep,
                isEditorOpen,
                setIsEditorOpen,
            }}>
            {isEditorOpen &&
                <SchemaEditor onSave={() => console.log('save')} onCancel={handleEditorClose} isOpen={isEditorOpen} />}
            <div className="main-wrapper">
                <MultiStepForm />
            </div>
        </FormStateContext.Provider>
    );
}

export default App;
