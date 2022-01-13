module.exports = {
    getUrl: (path, queryObj) => {
        const url = new URL(path);

        for (const key in queryObj) {
            url.searchParams.set(key, queryObj[key]);
        }

        return url;
    },

    getPagingData: (result, pageSize, page) => {
        const { count: totalItems, rows: data } = result;
        const currentPage = page ? +page : 0;
        const totalPages = Math.ceil(totalItems / pageSize);

        return { totalItems, totalPages, currentPage, data };
    },
};
