import { RegisterOptions } from 'react-hook-form';

export interface Field {
    name: string;
    type: string;
    placeholder: string;
    validation?: RegisterOptions;
    match?: string;
}

export interface JoinForm {
    email: string;
    nickname: string;
    password: string;
    confirmPassword?: string;
}

export interface LoginForm {
    email: string;
    password: string;
}
