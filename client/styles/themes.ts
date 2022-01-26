import { style } from './variables';

const { color, shadow } = style;

const globalTheme = {
    color,
    shadow,
};

export const lightTheme = {
    ...globalTheme,
    color: {
        ...globalTheme.color,
        background: '#DEDEDE',
        surface: color.white[100],
        font: color.black,
        border: color.black,
        highlight: '#026CDF',
    },
};

export type Theme = typeof lightTheme;
