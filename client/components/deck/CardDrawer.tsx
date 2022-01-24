import { TransparentButton } from '@/components';
import styled from '@emotion/styled';
import { memo, useState } from 'react';
import { IoIosArrowDropleftCircle } from 'react-icons/io';

const innerStyle = {
    background: '#ddd',
    width: `40rem`,
    transition: 'right 0.45s',
    cubicBezier: 'cubic-bezier(.6,.4,.3,.4)',
};

const transition = `transition: ${innerStyle.transition} ${innerStyle.cubicBezier}`;

const Aside = styled.aside<{ isOpen: boolean }>`
    background: ${innerStyle.background};
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '-' + innerStyle.width : 0)};
    width: ${innerStyle.width};
    height: 100%;
    ${transition}
`;

interface ToggleButtonProps {
    isOpen?: boolean;
}

const ToggleButton = styled(TransparentButton)<ToggleButtonProps>`
    position: fixed;
    top: 50%;
    right: ${({ isOpen }) => (isOpen ? 0 : innerStyle.width)};
    transform: translate(0, -50%);
    ${transition}
`;

const CardDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Aside isOpen={isOpen}></Aside>
            <ToggleButton
                isOpen={isOpen}
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <IoIosArrowDropleftCircle />
            </ToggleButton>
        </>
    );
};

export default memo(CardDrawer);
