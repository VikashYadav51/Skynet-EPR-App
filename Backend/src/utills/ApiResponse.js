class ApiResponse{
    constructor(
        statusCode,
        message = "Success",
        data = {},
        error = null,
    )

    {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.error = error;
    }
}

export default ApiResponse;