import { ReactElement, useContext } from 'react';
import { Box, Button } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import FormStateContext from '../../context';

export function Summary(): ReactElement {

    const { reset } = useFormContext();
    const { setCurrentStep } = useContext(FormStateContext);

    const handleReset = (): void => {
        setCurrentStep(0);
        reset();
    };
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
        }}>
            <h1>Form submitted!</h1>
            <Button onClick={handleReset}>Back</Button>
        </Box>
    );
}