import { HTMLAttributes, memo } from 'react';
import styled from '@emotion/styled';

// Styled
const Container = styled.div`
    background: ${({ theme: { color } }) => color.background};
    width: 100%;
    height: 100%;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const FormCard = styled.div`
    background: ${({ theme: { color } }) => color.surface};
    width: 92rem;
    height: 68rem;
    border-radius: 0.4rem;
    overflow: hidden;

    display: flex;

    section {
        img {
            width: 36rem;
            height: 100%;
            object-fit: cover;
        }
    }
`;

// Components
interface Props extends HTMLAttributes<HTMLDivElement> {}
const AuthLayout = ({ children }: Props) => {
    return (
        <Container>
            <FormCard>
                <section>
                    <img src="https://images.unsplash.com/photo-1599420186946-7b6fb4e297f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
                </section>
                <section style={{ flex: 1 }}>{children}</section>
            </FormCard>
        </Container>
    );
};

export default memo(AuthLayout);
