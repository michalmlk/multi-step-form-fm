import styled from 'styled-components';
import { FORM_STEPS } from '../config';

interface FormButtonsProps {
    currentStep: number;
}

export const StyledFormButtons = styled.div<FormButtonsProps>`
    display: flex;
    justify-content: space-between;
    padding-top: 1rem;
    flex-direction: ${(props) => [FORM_STEPS.length - 1, 0].includes(props.currentStep) ? 'row-reverse' : 'row'};
`;