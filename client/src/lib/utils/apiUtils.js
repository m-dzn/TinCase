export const handleJsonError = (callback) => {
    try {
        return callback();
    } catch (err) {
        return err.response.data;
    }
};
