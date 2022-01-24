import { HTMLAttributes, memo } from 'react';
import styled from '@emotion/styled';
import Logo from '../Logo';
import { style } from '@/styles';

const Container = styled.header`
    height: 5.6rem;
    display: flex;
`;

const InnerLayout = styled.div`
    width: 100%;
    height: 100%;
    max-width: ${style.breakpoint.desktop}rem;
    margin: 0 auto;

    display: flex;
`;

const LogoWrapper = styled.div`
    padding: ${style.space[4]}rem 0;
`;

const Nav = styled.nav``;

interface NavBarProps extends HTMLAttributes<HTMLElement> {}

const NavBar = ({ ...rest }: NavBarProps) => {
    return <Nav {...rest}></Nav>;
};

const Header = () => {
    return (
        <Container>
            <InnerLayout>
                <LogoWrapper>
                    <Logo />
                </LogoWrapper>
                <NavBar />
            </InnerLayout>
        </Container>
    );
};

export default memo(Header);
