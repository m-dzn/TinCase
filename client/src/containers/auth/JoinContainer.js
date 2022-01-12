import React from "react";
import { JoinForm } from "components";
import { FORM, KEY } from "constants";
import { authAPI, useForm, validationRules } from "lib";

const { required, email, minLength, maxLength, match } = validationRules;

const { JOIN } = FORM;

const joinForm = {
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
    [JOIN.NICKNAME]: {
        name: JOIN.NICKNAME,
        value: "",
        type: "text",
        valid: false,
        label: "닉네임",
        maxLength: JOIN.NICKNAME_MAX_LENGTH,
        placeholder: "닉네임을 입력해주세요",
        message: "",
        rules: [
            required,
            minLength(JOIN.NICKNAME_MIN_LENGTH),
            maxLength(JOIN.NICKNAME_MAX_LENGTH),
        ],
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
    [JOIN.CONFIRM_PASSWORD]: {
        name: JOIN.CONFIRM_PASSWORD,
        value: "",
        type: "password",
        valid: false,
        label: "비밀번호 확인",
        maxLength: JOIN.PASSWORD_MAX_LENGTH,
        placeholder: "비밀번호를 한 번 더 입력해주세요",
        message: "",
        rules: [
            required,
            minLength(JOIN.PASSWORD_MIN_LENGTH),
            maxLength(JOIN.PASSWORD_MAX_LENGTH),
        ],
    },
};

const submitAPI = async (submitForm) => {
    delete submitForm[JOIN.CONFIRM_PASSWORD];
    localStorage.setItem(KEY.REDIRECT_URL, "/");

    await authAPI.register(submitForm);
    alert("회원가입 성공");
};

function JoinContainer() {
    const { form, isValid, onChange, onSubmit } = useForm(
        joinForm,
        submitAPI,
        match(JOIN.PASSWORD, JOIN.CONFIRM_PASSWORD)
    );

    return (
        <JoinForm
            form={form}
            isValid={isValid}
            onChange={onChange}
            onSubmit={onSubmit}
        />
    );
}

export default JoinContainer;
