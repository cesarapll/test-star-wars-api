class BadRequestError extends Error {
    constructor(message) {
        super(message);
        this.name = "BadRequestError";
    }
}

class InternalServerError extends Error {
    constructor(message) {
        super(message);
        this.name = "InternalServerError";
    }
}

class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "NotFoundError";
    }
}

class ConflictError extends Error {
    constructor(message) {
        super(message);
        this.name = "ConflictError";
    }
}

class ErrorHandler {
    buildErrorData(error) {
        if (error instanceof BadRequestError) {
            return {
                statusCode: 400,
                message: error.message,
            };
        }
        if (error instanceof NotFoundError) {
            return {
                statusCode: 404,
                message: error.message,
            };
        }
        if (error instanceof InternalServerError) {
            return {
                statusCode: 500,
                message: error.message,
            };
        }
        if (error instanceof ConflictError) {
            return {
                statusCode: 409,
                message: error.message,
            };
        }

        return {
            statusCode: 500,
            message: error.message,
        };
    }
}

module.exports = {
    NotFoundError,
    BadRequestError,
    InternalServerError,
    ConflictError,
    ErrorHandler: new ErrorHandler(),
};
