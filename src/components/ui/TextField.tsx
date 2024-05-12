import { Input } from '@mui/base/Input';

import {
    Controller,
    useFormContext,
    get,
} from 'react-hook-form';

interface TextFieldProps {
    name: string;
}

export const TextFieldCustom = ({ ...props }: TextFieldProps) => {
    const { control, formState } = useFormContext();
    const error = get(formState.errors, props.name);

    return (
        <Controller
            {...props}
            control={control}
            name={props.name}
            render={({ field }) => (
                <Input name={field.name} onChange={field.onChange} value={field.value} />
            )} />
    );
};