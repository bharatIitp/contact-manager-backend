export const errorHandler = (err,req,res,next) => {
    console.error(`[ERROR] ${err.message}`);

    const statuscode = err.statuscode || 500;

    res.status(statuscode).json({
        success: false,
        message: err.message || 'Server Error',
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
};