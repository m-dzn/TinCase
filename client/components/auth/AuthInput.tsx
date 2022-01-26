import { strings } from '@/constants';
import { Field } from '@/interface';
import { style } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { memo } from 'react';
import { FieldErrors, useFormContext } from 'react-hook-form';

const innerStyle = {
    invalidColor: 'red',
    input: {
        height: 3.6,
        padding: `0 ${style.space[1]}rem`,
        borderWidth: style.border.level1,
    },
    invalidMessage: {
        fontSize: style.fontSize.sm,
    },
};

// Styled
const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

interface InputValidationProps {
    invalid: boolean;
}
const Input = styled.input<InputValidationProps>`
    outline: none;
    border-width: ${innerStyle.input.borderWidth}rem;
    border-color: ${({ invalid, theme: { color } }) =>
        !invalid ? color.border : innerStyle.invalidColor};
    height: ${innerStyle.input.height}rem;
    padding: ${innerStyle.input.padding};

    ${({ theme: { color } }) => css`
        &:hover,
        &:focus {
            border-color: ${color.highlight};
            outline: 1px solid ${color.highlight};
        }
    `}
`;

const InvalidMessage = styled.div`
    color: ${innerStyle.invalidColor};
    font-size: ${innerStyle.invalidMessage.fontSize}rem;
`;

// Components
interface Props {
    field: Field;
    errors: FieldErrors;
}
const AuthInput = ({ field, errors }: Props) => {
    const { register, getValues } = useFormContext();

    const error = errors[field.name];

    let validation;
    if (field.match) {
        validation = {
            ...field.validation,
            validate: (value: any) =>
                field.match && value === getValues()[field.match],
        };
    } else {
        validation = field.validation;
    }

    return (
        <Container>
            <Input
                type={field.type}
                {...register(field.name, validation)}
                placeholder={field.placeholder}
                invalid={!!error}
            />
            <InvalidMessage>
                {errors[field.name] &&
                    (errors[field.name].message ||
                        strings.validation.defaultMsg)}
            </InvalidMessage>
        </Container>
    );
};

export default memo(AuthInput);
