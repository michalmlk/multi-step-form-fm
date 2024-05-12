import React from 'react';
import { TextFieldCustom } from '../../ui/TextField.tsx';

export default function PersonalData(): React.ReactElement {
    return (
        <>
            <h1>Personal data</h1>
            <TextFieldCustom label="First name" name="firstName" />
            <TextFieldCustom label="Last name" name="lastName" />
            <TextFieldCustom label="Last name" name="email" />
        </>
    );
}