const { ErrorHandler } = require("../utils/errors");

function errorMiddleware(error, req, res, next) {
    const errorData = ErrorHandler.buildErrorData(error);
    return res.status(errorData.statusCode).json({ message: errorData.message });
}


module.exports = errorMiddleware
