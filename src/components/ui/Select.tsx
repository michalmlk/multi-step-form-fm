import {
    Controller,
    useFormContext,
    get,
} from 'react-hook-form';
import { MenuItem, Select } from '@mui/material';

interface TextFieldProps {
    name: string;
    label: string;
    options: {
        value: string | number;
        label: string
    }[];
}

export function SelectCustom({ ...props }: TextFieldProps) {
    const { formState: { errors }, control } = useFormContext();
    const error = get(errors, props.name);

    return (
        <Controller
            name={props.name}
            control={control}
            render={({ field }) => (
                <Select error={error} variant="outlined" name={field.name} onChange={field.onChange}
                        label={props.label}
                        value={field.value}
                        defaultValue={props.options[0].value}
                        sx={{
                            width: '100%',
                        }}>
                    {props.options.map((option, idx) => (
                        <MenuItem key={idx} value={option.value}>{option.label}</MenuItem>
                    ))}
                </Select>
            )} />
    );
};