const { StatusCodes } = require("http-status-codes");

class CustomError extends Error {
    constructor(message, status) {
        super(message);

        this.name = "CustomError";
        this.status = status || StatusCodes.BAD_REQUEST;
    }
}

const errorMap = new Map([
    [
        "SequelizeValidationError",
        {
            status: StatusCodes.BAD_REQUEST,
            getMessage: (err) => err.errors[0].message,
        },
    ],
]);

module.exports = {
    CustomError,

    getErrorInfo: (err) => {
        const errInfo = errorMap.get(err.name);
        const { status, message } = {
            status: errInfo?.status || err.status || StatusCodes.NOT_FOUND,
            message: errInfo?.getMessage(err) || err.message,
        };

        return {
            status: status,
            message: message,
        };
    },

    sendJsonMessage: (status, message, ...rest) => {
        return {
            status,
            data: {
                message,
                ...rest,
            },
        };
    },

    handleAsyncException: (asyncFn, defaultErrorMessage) => {
        return async (req, res, next) => {
            try {
                return await asyncFn(req, res, next);
            } catch (err) {
                console.error(err);
                if (err.name !== "CustomError" && defaultErrorMessage) {
                    err.message = defaultErrorMessage;
                }
                next(err);
            }
        };
    },
};
