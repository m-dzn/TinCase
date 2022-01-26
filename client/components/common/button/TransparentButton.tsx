import { ButtonHTMLAttributes, memo } from 'react';
import styled from '@emotion/styled';
import { mixin } from '@/styles';

// Styled
const StyledButton = styled.button`
    ${mixin.initButton}
`;

// Components
interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}
const TransparentButton = ({ children, ...rest }: Props) => {
    return <StyledButton {...rest}>{children}</StyledButton>;
};

export default memo(TransparentButton);
