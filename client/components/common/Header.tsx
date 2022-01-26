import { memo } from 'react';
import styled from '@emotion/styled';
import { style } from '@/styles';
import Logo from '@/components/common/Logo';
import NavBar from './NavBar';

// Tokens
const innerStyle = {
    height: 5.6,
    logo: {
        padding: `${style.space[4]}rem 0`,
    },
};

// Styled
const Container = styled.header`
    display: flex;
    height: ${innerStyle.height}rem;
`;

const InnerLayout = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;

    display: flex;

    max-width: ${style.breakpoint.desktop}rem;
`;

const LogoWrapper = styled.div`
    padding: ${innerStyle.logo.padding};
`;

// Components
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
