module.exports = {
    getUrl: (path, queryObj) => {
        const url = new URL(path);

        for (const key in queryObj) {
            url.searchParams.set(key, queryObj[key]);
        }

        console.log("getUrl", url);
        return url;
    },
};
