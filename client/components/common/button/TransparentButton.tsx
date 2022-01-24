import { mixin } from '@/styles';
import styled from '@emotion/styled';
import { ButtonHTMLAttributes } from 'react';

const StyledButton = styled.button`
    ${mixin.initButton}
`;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

const TransparentButton = ({ children, ...rest }: Props) => {
    return <StyledButton {...rest}>{children}</StyledButton>;
};

export default TransparentButton;
