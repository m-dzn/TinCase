import { HTMLAttributes, memo } from 'react';
import styled from '@emotion/styled';
import { style } from '@/styles';

// Tokens
const innerStyle = {
    width: 32,
    ratio: 1.618,
    fontSize: style.fontSize.md,
};

// Styled
const Article = styled.article`
    background: ${({ theme: { color } }) => color.surface};

    width: ${innerStyle.width}rem;

    overflow: hidden;

    font-size: ${innerStyle.fontSize};
`;

// Components
interface Props extends HTMLAttributes<HTMLElement> {}
const BasicCardTemplate = ({ children, ...rest }: Props) => {
    return <Article {...rest}>{children}</Article>;
};

export default memo(BasicCardTemplate);
