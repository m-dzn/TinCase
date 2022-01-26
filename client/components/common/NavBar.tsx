import { HTMLAttributes, memo } from 'react';
import styled from '@emotion/styled';
import { paths } from '@/constants';
import { style } from '@/styles';
import Link from 'next/link';

// Tokens
const innerStyle = {
    navMenuItem: {
        padding: `0 ${style.space[2]}rem`,
    },
};

// Styled
const Nav = styled.nav`
    margin-left: auto;
`;

const NavMenu = styled.ul`
    list-style: none;

    display: flex;

    height: 100%;
    margin: 0;
`;

const NavMenuItem = styled.li`
    padding: ${innerStyle.navMenuItem.padding};

    display: flex;
    justify-content: center;
    align-items: center;

    a {
        color: ${({ theme: { color } }) => color.font};
        text-decoration: none;
    }
`;

// Data
interface NavItem {
    label: string;
    path: string;
}
const items: NavItem[] = [
    {
        label: '홈',
        path: paths.client.home,
    },
    {
        label: '로그인',
        path: paths.client.login,
    },
    {
        label: '회원가입',
        path: paths.client.join,
    },
];

// Components
interface NavBarProps extends HTMLAttributes<HTMLElement> {}
const NavBar = ({ ...rest }: NavBarProps) => {
    return (
        <Nav {...rest}>
            <NavMenu>
                {items.map((item) => (
                    <NavMenuItem key={item.path}>
                        <Link href={item.path}>{item.label}</Link>
                    </NavMenuItem>
                ))}
            </NavMenu>
        </Nav>
    );
};

export default memo(NavBar);
