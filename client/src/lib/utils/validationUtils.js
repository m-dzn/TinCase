// Validation Rules
export const validationRules = {
    required: {
        regexp: /.+/,
        match: true,
        message: "필수 입력 항목입니다.",
    },

    notBlank: {
        regexp: /\s/,
        match: false,
        message: "공백을 포함할 수 없습니다.",
    },

    notStartWithNumber: {
        regexp: /^\d/,
        match: false,
        message: "숫자로 시작하는 아이디는 사용할 수 없습니다.",
    },

    minLength: (limit) => ({
        regexp: new RegExp(`(.){${limit}}`),
        match: true,
        message: `최소 ${limit}글자 이상이어야 합니다.`,
    }),

    maxLength: (limit) => ({
        regexp: new RegExp(`^(.){0,${limit}}$`),
        match: true,
        message: `최대 ${limit}글자까지 허용됩니다.`,
    }),

    email: {
        regexp: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/i,
        match: true,
        message: "이메일 형식에 맞게 입력해주세요.",
    },

    match: (sourceName, targetName) => (form) => {
        const sourceField = form[sourceName];
        const targetField = form[targetName];

        if (sourceField?.valid && targetField?.valid) {
            const isMatched = new RegExp(`^${sourceField.value}$`).test(
                targetField.value
            );

            if (!isMatched) {
                return {
                    name: targetName,
                    message: "비밀번호가 일치하지 않습니다.",
                    valid: false,
                };
            }
        }

        return { valid: true };
    },
};
