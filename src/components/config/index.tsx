import PersonalData from '../steps/PersonalData/PersonalData.tsx';
import Preferences from '../steps/Preferences/Preferences.tsx';

export const FORM_STEPS = [
    {
        component: <PersonalData />,
        title: 'Personal Data',
        values: {
            firstName: '',
            lastName: '',
            email: '',
        },
    },
    {
        component: <Preferences />,
        title: 'Preferences',
        value: {
            plan: 'basic',
            payment: 'monthly',
        },
    },
];

export const DEFAULT_FORM_VALUES = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    plan: 'basic',
    payment: 'monthly',
};