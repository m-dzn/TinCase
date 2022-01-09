import React from "react";
import { LoginForm } from "components";
import { FORM } from "constants";
import { authAPI, useForm, validationRules } from "lib";

const { required, email, minLength } = validationRules;

const { JOIN } = FORM;

const loginForm = {
    [JOIN.EMAIL]: {
        name: JOIN.EMAIL,
        value: "",
        type: "email",
        valid: false,
        label: "이메일",
        placeholder: "이메일을 입력해주세요",
        message: "",
        rules: [required, email],
    },
    [JOIN.PASSWORD]: {
        name: JOIN.PASSWORD,
        value: "",
        type: "password",
        valid: false,
        label: "비밀번호",
        placeholder: "비밀번호를 입력해주세요",
        message: "",
        rules: [required, minLength(4)],
    },
};

const submitAPI = async (submitForm) => {
    await authAPI.login(submitForm);
};

function LoginContainer() {
    const { form, isValid, onChange, onSubmit } = useForm(loginForm, submitAPI);

    return (
        <LoginForm
            form={form}
            isValid={isValid}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
}

export default LoginContainer;
