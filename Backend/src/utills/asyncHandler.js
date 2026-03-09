const asyncHandler = (requestFilePath) =>{
    return( (err, req, res, next) =>{
        Promise.resolve(requestFilePath(err, req, res, next))
            .catch((err) => next(err));
    })
}

export default asyncHandler;