const unit = 'rem';
const remToPx = 10;

const BREAKPOINT_NAME = {
    DESKTOP: 'desktop',
    LAPTOP: 'laptop',
    TABLET: 'tablet',
    MOBILE: 'mobile',
};

const breakpoint = {
    [BREAKPOINT_NAME.DESKTOP]: 120,
    [BREAKPOINT_NAME.LAPTOP]: 99.2,
    [BREAKPOINT_NAME.TABLET]: 76.8,
    [BREAKPOINT_NAME.MOBILE]: 32,
};

const responsive = {
    // [BREAKPOINT_NAME.LAPTOP]: `@media (max-width: ${
    //     breakpoint[BREAKPOINT_NAME.DESKTOP] * remToPx - 1
    // }px) and (min-width: ${breakpoint[BREAKPOINT_NAME.LAPTOP]})`,

    [BREAKPOINT_NAME.TABLET]: `@media (max-width: ${
        breakpoint[BREAKPOINT_NAME.LAPTOP] * remToPx - 1
    }px) and (min-width: ${breakpoint[BREAKPOINT_NAME.TABLET]})`,

    [BREAKPOINT_NAME.MOBILE]: `@media (max-width: ${
        breakpoint[BREAKPOINT_NAME.TABLET] * remToPx - 1
    } px)`,
};

const fontSize = {
    h1: 4,
    h2: 3.2,
    h3: 2.4,
    h4: 2,
    h5: 1.8,
    h6: 1.6,

    xl: 2,
    lg: 1.8,
    md: 1.6,
    sm: 1.4,
    xs: 1.3,
};

const border = {
    level1: 0.1,
};

const color = {
    primary: '#02EEC9',
    white: {
        100: '#FFFFFF',
    },
    black: '#000000',
};

const shadow = {};

const space = [0.4, 0.8, 1.2, 1.6, 2, 2.4, 2.8, 3.2];

export const style = {
    unit,
    breakpoint,
    responsive,

    fontSize,
    color,

    border,
    shadow,
    space,
    common: {},
};
