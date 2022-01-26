import { memo } from 'react';
import styled from '@emotion/styled';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { TransparentButton } from '@/components/common/button';

// Tokens
const innerStyle = {
    background: '#ddd',
    width: 40,
    transition: 'all 0.45s',
    cubicBezier: 'cubic-bezier(.6,.4,.3,.4)',
};

const transition = `transition: ${innerStyle.transition} ${innerStyle.cubicBezier}`;

// Styled
interface IsOpenProps {
    isOpen?: boolean;
}
const Aside = styled.aside<IsOpenProps>`
    background: ${innerStyle.background};
    width: ${({ isOpen }) => (isOpen ? 0 : innerStyle.width)}rem;
    ${transition}
`;

const ToggleButton = styled(TransparentButton)<IsOpenProps>`
    position: absolute;
    top: 50%;
    right: ${({ isOpen }) => (isOpen ? 0 : innerStyle.width)}rem;
    transform: translate(0, -50%);
    ${transition}
`;

// Components
interface Props extends IsOpenProps {
    onClickToggleOpen: () => void;
}
const CardDrawer = ({ isOpen, onClickToggleOpen }: Props) => {
    return (
        <>
            <Aside isOpen={isOpen}></Aside>
            <ToggleButton isOpen={isOpen} onClick={onClickToggleOpen}>
                <IoIosArrowDropleftCircle />
            </ToggleButton>
        </>
    );
};

export default memo(CardDrawer);
