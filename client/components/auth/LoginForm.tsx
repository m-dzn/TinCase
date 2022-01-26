import { useState } from 'react';
import styled from '@emotion/styled';
import { FormProvider, useForm } from 'react-hook-form';

import { validation } from '@/constants';
import { Field } from '@/interface';
import AuthInput from '@/components/auth/AuthInput';
import { regexpPattern } from '@/lib';
import { style } from '@/styles';
import { FlatButton } from '@/components';

// Styled
const FormLayout = styled.div`
    padding: 4rem;
`;

const FormBody = styled.div`
    & > * {
        margin-bottom: ${style.space[2]}rem;
    }
`;

// Data
const fields: Field[] = [
    {
        name: 'email',
        type: 'email',
        placeholder: '이메일',
        validation: {
            required: '이메일은 필수 입력 항목입니다.',
            maxLength: {
                value: validation.auth.email.maxLength,
                message: `이메일이 너무 깁니다.`,
            },
            pattern: {
                value: regexpPattern.email,
                message: '이메일 형식에 맞게 입력해주세요.',
            },
        },
    },
    {
        name: 'password',
        type: 'password',
        placeholder: '비밀번호',
        validation: {
            required: '비밀번호는 필수 입력 항목입니다.',
            minLength: {
                value: validation.auth.password.minLength,
                message: `비밀번호의 길이는 최소 ${validation.auth.password.minLength}자 이상이어야 합니다.`,
            },
            maxLength: {
                value: validation.auth.password.maxLength,
                message: `비밀번호의 길이는 ${validation.auth.password.maxLength}자 이하여야 합니다.`,
            },
        },
    },
];

// Components
const LoginForm = () => {
    const formMethods = useForm({ mode: 'onBlur', criteriaMode: 'all' });
    const [result, setResult] = useState('');

    const onSubmit = (form: object) => {
        console.log(form);
        setResult(JSON.stringify(form));
    };

    return (
        <FormProvider {...formMethods}>
            <form onSubmit={formMethods.handleSubmit(onSubmit)}>
                <FormLayout>
                    <header>
                        <h2>로그인</h2>
                    </header>
                    <FormBody>
                        {fields.map((field) => (
                            <AuthInput
                                key={field.name}
                                field={field}
                                errors={formMethods.formState.errors}
                            />
                        ))}
                    </FormBody>
                    <FlatButton type="submit">로그인</FlatButton>
                </FormLayout>
            </form>
        </FormProvider>
    );
};

export default LoginForm;
