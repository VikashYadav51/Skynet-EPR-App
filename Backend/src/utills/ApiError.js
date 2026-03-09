class ApiError extends Error{
    constructor(
        statusCode,
        message = "Something Went Wrong ",
        error = [],
        stack = "",

    )
    
    {
        this.statusCode = statusCode;
        super(message);
        this.error = error;

        if(stack){
            this.stack = stack;
        }

        else{
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

export default ApiError;