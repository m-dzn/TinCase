import { css } from '@emotion/react';

export const globalStyles = css`
    html {
        font-size: 62.5%;
    }

    body {
        margin: 0;
        font-size: 160%;
    }

    [class] {
        &,
        &:before,
        &:after {
            box-sizing: border-box;
        }
    }
`;
