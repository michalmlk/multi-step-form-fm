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
];

export const DEFAULT_FORM_VALUES = {
    firstName: '',
    lastName: '',
    email: '',
    plan: 'basic',
    payment: 'monthly',
};

export type FormValues = typeof DEFAULT_FORM_VALUES;