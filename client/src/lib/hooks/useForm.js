import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { KEY } from "constants";

const getValidationInfo = (name, value, prevForm) => {
    // 함수형 유효성 규칙 가공
    const rules = prevForm[name].rules.map((rule) =>
        typeof rule === "function" ? rule(prevForm) : rule
    );

    const invalidRule = rules.find(
        (rule) => rule.regexp.test(value) !== rule.match
    );

    return {
        [name]: {
            ...prevForm[name],
            value,
            valid: !!!invalidRule,
            message: invalidRule ? invalidRule.message : "",
        },
    };
};

function useForm(initForm, submitAPI, matchFn) {
    const [form, setForm] = useState(initForm);
    const [isValid, setIsValid] = useState(false);

    const navigate = useNavigate();

    const onChange = useCallback((event) => {
        const { name, value } = event.target;

        setForm((prevForm) => {
            const validationInfo = getValidationInfo(name, value, prevForm);

            return {
                ...prevForm,
                ...validationInfo,
            };
        });
    }, []);

    const onSubmit = useCallback(
        async (event) => {
            event.preventDefault();

            const submitForm = {};

            for (const name in form) {
                submitForm[name] = form[name].value;
            }

            if (isValid) {
                await submitAPI(submitForm);
                navigate(localStorage.getItem(KEY.REDIRECT_URL));
            }
        },
        [form, isValid, submitAPI, navigate]
    );

    useEffect(() => {
        let isEveryFieldVaid = true;

        if (matchFn) {
            const { name, valid, message } = matchFn(form);

            if (!valid) {
                setForm((prev) => ({
                    ...prev,
                    [name]: {
                        ...prev[name],
                        valid,
                        message,
                    },
                }));
            }
            isEveryFieldVaid = valid;
        }

        isEveryFieldVaid =
            isEveryFieldVaid &&
            Object.keys(form).every((key) => form[key].valid);

        setIsValid(isEveryFieldVaid);
    }, [form, matchFn]);

    return { form, isValid, onChange, onSubmit };
}

export default useForm;
