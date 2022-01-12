import React from "react";
import { LoginForm } from "components";
import { FORM, KEY } from "constants";
import {
    authAPI,
    currentUserState,
    useForm,
    userAPI,
    validationRules,
} from "lib";
import { useSetRecoilState } from "recoil";

const { required, email, minLength, maxLength } = validationRules;

const { JOIN } = FORM;

const loginForm = {
    [JOIN.EMAIL]: {
        name: JOIN.EMAIL,
        value: "",
        type: "email",
        valid: false,
        label: "이메일",
        maxLength: JOIN.EMAIL_MAX_LENGTH,
        placeholder: "이메일을 입력해주세요",
        message: "",
        rules: [required, email, maxLength(JOIN.EMAIL_MAX_LENGTH)],
    },
    [JOIN.PASSWORD]: {
        name: JOIN.PASSWORD,
        value: "",
        type: "password",
        valid: false,
        label: "비밀번호",
        maxLength: JOIN.PASSWORD_MAX_LENGTH,
        placeholder: "비밀번호를 입력해주세요",
        message: "",
        rules: [
            required,
            minLength(JOIN.PASSWORD_MIN_LENGTH),
            maxLength(JOIN.PASSWORD_MAX_LENGTH),
        ],
    },
};

function LoginContainer() {
    const setMe = useSetRecoilState(currentUserState);
    const submitAPI = async (submitForm) => {
        localStorage.setItem(KEY.REDIRECT_URL, "/");
        await authAPI.login(submitForm);
        alert("로그인 성공");

        const data = await userAPI.me();
        setMe(data);
    };

    const { form, isValid, onChange, onBlur, onSubmit } = useForm(
        loginForm,
        submitAPI
    );

    return (
        <LoginForm
            form={form}
            isValid={isValid}
            onChange={onChange}
            onBlur={onBlur}
            onSubmit={onSubmit}
        />
    );
}

export default LoginContainer;
