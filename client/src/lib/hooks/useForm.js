import { useCallback, useEffect, useState } from "react";

function useForm(initForm, submitAPI) {
    const [form, setForm] = useState(initForm);
    const [isValid, setIsValid] = useState(false);

    const onChange = useCallback(
        (event) => {
            const { name, value } = event.target;

            const invalidRule = initForm[name].rules.find(
                (rule) => rule.regexp.test(value) !== rule.match
            );

            setForm((prevForm) => ({
                ...prevForm,
                [name]: {
                    ...prevForm[name],
                    value,
                    valid: !invalidRule,
                    message: invalidRule ? invalidRule.message : "",
                },
            }));
        },
        [initForm]
    );

    const onSubmit = useCallback(
        (event) => {
            event.preventDefault();

            if (isValid) {
                const submitForm = {};

                for (const name in form) {
                    submitForm[name] = form[name].value;
                }

                console.log("전송");
                submitAPI(submitForm);
            } else {
                console.log("전송 실패");
            }
        },
        [form, isValid, submitAPI]
    );

    useEffect(() => {
        let checkValidation = true;

        for (const name in form) {
            checkValidation = form[name].valid;
            if (!checkValidation) break;
        }

        setIsValid(checkValidation);
    }, [form]);

    return { form, isValid, onChange, onSubmit };
}

export default useForm;
