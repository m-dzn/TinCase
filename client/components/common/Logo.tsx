import { memo } from 'react';
import Link from 'next/link';
import { images, paths } from '@/constants';
import styled from '@emotion/styled';

const Image = styled.img`
    max-height: 100%;
`;

const Logo = () => {
    return (
        <Link href={paths.client.home}>
            <a>
                <Image src={images.logo} alt="Logo" />
            </a>
        </Link>
    );
};

export default memo(Logo);
