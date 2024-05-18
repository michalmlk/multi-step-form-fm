import React from 'react';
import { TextFieldCustom } from '../../ui/TextField.tsx';
import { Wrapper } from './StepContent.styles.tsx';
import { FORM_STEPS } from '../../config';
import { SelectCustom } from '../../ui/Select.tsx';

export default function StepContent({ step }: { step: number }): React.ReactElement {
    const { values } = FORM_STEPS[step];
    const fields = Object.values(values);

    return (
        <Wrapper>
            {
                fields.map((field) => (
                    field.inputType === 'input' ?
                        <TextFieldCustom key={field.name} name={field.name} label={field.label} />
                        :
                        <SelectCustom key={field.name} name={field.name} label={field.label} options={field.options} />
                ))}
        </Wrapper>
    );
}