import React from "react";
import { JoinForm } from "components";
import { FORM } from "constants";
import { authAPI, useForm, validationRules } from "lib";

const { required, email, minLength } = validationRules;

const { JOIN } = FORM;

const joinForm = {
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
    [JOIN.NICKNAME]: {
        name: JOIN.NICKNAME,
        value: "",
        type: "text",
        valid: false,
        label: "닉네임",
        placeholder: "닉네임을 입력해주세요",
        message: "",
        rules: [required, minLength(2)],
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
    [JOIN.CONFIRM_PASSWORD]: {
        name: JOIN.CONFIRM_PASSWORD,
        value: "",
        type: "password",
        valid: false,
        label: "비밀번호 확인",
        placeholder: "비밀번호를 한 번 더 입력해주세요",
        message: "",
        rules: [required],
    },
};

const submitAPI = async (submitForm) => {
    await authAPI.register(submitForm);
};

function JoinContainer() {
    const { form, isValid, onChange, onSubmit } = useForm(joinForm, submitAPI);

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
