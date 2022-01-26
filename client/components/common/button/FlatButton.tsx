import { style } from '@/styles';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes, memo } from 'react';

const innerStyle = {
    md: {
        padding: `${style.space[1]}rem ${style.space[2]}rem`,
        borderRadius: 0.4,
    },
};

// Styled
type ButtonSize = 'md';

const styleBySize = (size: ButtonSize) => css`
    padding: ${innerStyle[size].padding};
    border-radius: ${innerStyle[size].borderRadius}rem;
`;

interface ButtonProps {
    color?: string;
    size: ButtonSize;
}
const StyledButton = styled.button<ButtonProps>`
    border: none;
    background: ${({ color, theme }) => color || theme.color.primary};
    cursor: pointer;

    ${({ size }) => styleBySize(size)}

    &:hover {
        filter: brightness(0.95);
    }
`;

// Components
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
}
const FlatButton = ({ color, size = 'md', children, ...rest }: Props) => {
    return (
        <StyledButton color={color} size={size} {...rest}>
            {children}
        </StyledButton>
    );
};

export default memo(FlatButton);
