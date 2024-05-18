import * as yup from 'yup';

export const FORM_STEPS = [
    {
        title: 'Personal Data',
        values: {
            firstName: {
                name: 'firstName',
                label: 'First name',
                inputType: 'input',
                type: 'string',
                defaultValue: '',
            },
            lastName: {
                name: 'lastName',
                label: 'Last name',
                inputType: 'input',
                type: 'string',
                defaultValue: '',
            },
            email: {
                name: 'email',
                label: 'Email',
                inputType: 'input',
                type: 'email',
                defaultValue: '',
            },
        },
    },
    {
        title: 'Preferences',
        values: {
            username: {
                name: 'username',
                label: 'Username',
                inputType: 'input',
                type: 'string',
                defaultValue: '',
            },
            plan: {
                name: 'plan',
                label: 'Plan',
                inputType: 'select',
                defaultValue: 'basic',
                options: [
                    {
                        value: 'basic',
                        label: 'Basic',
                    },
                    {
                        value: 'pro',
                        label: 'Pro',
                    },
                ],
            },
            payment: {
                name: 'payment',
                inputType: 'select',
                defaultValue: 'monthly',
                options: [
                    {
                        value: 'monthly',
                        label: 'Monthly',
                    },
                    {
                        value: 'yearly',
                        label: 'Yearly',
                    },
                ],
            },
        },
    },
    {
        title: 'Company',
        values: {
            companyName: {
                name: 'companyName',
                label: 'Company name',
                inputType: 'input',
                type: 'string',
                defaultValue: '',
            },
            companySize: {
                name: 'companySize',
                label: 'Company size',
                inputType: 'input',
                type: 'number',
                defaultValue: 1,
            },
        },
    },
];

export const DEFAULT_FORM_VALUES = {
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    plan: 'basic',
    payment: 'monthly',
    companyName: '',
    companySize: 1,
};

export type FormValues = typeof DEFAULT_FORM_VALUES;

export const schema = [
    yup.object({
        firstName: yup.string().required('First name is required'),
        lastName: yup.string().required('Last name is required'),
        email: yup.string().email().required('Email is required'),
    }),
    yup.object({
        username: yup.string().required('Username is required'),
        plan: yup.string().required('Plan is required'),
        payment: yup.string().required('Payment is required'),
    }),
    yup.object({
        companyName: yup.string().required('Company name is required'),
        companySize: yup.number().required('Company size is required'),
    }),
];