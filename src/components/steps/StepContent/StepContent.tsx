import React from 'react';
import { TextFieldCustom } from '../../ui/TextField.tsx';
import { Wrapper } from './StepContent.styles.tsx';
import { FORM_STEPS } from '../../config';
import { SelectCustom } from '../../ui/Select.tsx';
import { useFormContext } from 'react-hook-form';
import { Summary } from '../../ui/Summary.tsx';

export default function StepContent({ step }: { step: number }): React.ReactElement {
    const { values } = FORM_STEPS[step];
    const fields = Object.values(values);
    const { formState: { isSubmitted } } = useFormContext();

    console.log(isSubmitted);

    return (
        <Wrapper>
            {isSubmitted ? <Summary /> :
                fields.map((field, idx) => (
                    field.inputType === 'input' ? <TextFieldCustom key={idx} name={field.name} label={field.label} />
                        : <SelectCustom key={idx} name={field.name} label={field.label} options={field.options} />
                ))}
        </Wrapper>
    );
}