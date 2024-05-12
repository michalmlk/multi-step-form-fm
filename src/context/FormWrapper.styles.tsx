import styled from "styled-components";

export const FormWrapper = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
    width: 100%;
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;

    label {
        text-align: start;
    }
`;