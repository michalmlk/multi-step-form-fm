import { ReactElement } from 'react';
import { Controller, useFormContext, get } from 'react-hook-form';
import { TextField } from '@mui/material';

interface SelectProps {
    label: string;
    name: string;
}

export function TextFieldCustom({ ...props }: SelectProps): ReactElement {
    const { formState: { errors }, control } = useFormContext();
    const error = get(errors, props.name);

    return (
        <Controller control={control} name={props.name} render={({ field }) => (
            <TextField error={error} variant="outlined" name={field.name} onChange={field.onChange}
                       label={props.label}
                       value={field.value}
                       helperText={error && error.message} sx={{ width: '100%' }} />
        )} />
    );
}