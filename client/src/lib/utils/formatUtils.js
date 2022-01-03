import moment from "moment";

const ROUNDING = 10;
const THOUSAND = 1000;
const TEN_THOUSAND = THOUSAND * 10;
const HUNDRED_THOUSAND = THOUSAND * 100;

export const formatDate = (date, format = "YYYY. MM. DD.") => {
    return moment(date).format(format);
};

export const formatDateUS = (date) => {
    return formatDate(date, "MMM. DD, YYYY");
};

export const formatDateKor = (date) => {
    return formatDate(date, "YYYY년 MM월 DD일");
};

export const formatUnitKor = (viewCount) => {
    let korViewCount = 0;

    if (viewCount >= HUNDRED_THOUSAND) {
        korViewCount = `${Math.round(viewCount / TEN_THOUSAND)}만`;
    } else if (viewCount >= TEN_THOUSAND) {
        korViewCount = `${
            Math.round((viewCount / TEN_THOUSAND) * ROUNDING) / ROUNDING
        }만`;
    } else if (viewCount >= THOUSAND) {
        korViewCount += `${Math.round(viewCount / TEN_THOUSAND)}`;
    }

    return korViewCount;
};
