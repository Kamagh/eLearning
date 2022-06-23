const sendSuccess = (data, res, statusCode) => {
    const responseBody = {
        message: 'Success',
        data,
    }
    res.status(statusCode).json(responseBody);
}
const SendError = (err, res) => {
    const name = err.name;
    const messages = err.errors?.map((error) => error.message) || [err.message];
    let errorCode;
    let statusCode;

    switch (name) {
        case 'ValidationError':
        case "SequelizeValidationError":
            statusCode = 422;
            errorCode = 'VALIDATION_ERROR'
            break

    }
}