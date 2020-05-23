export class AppError extends Error {
  constructor(message, code = 500) {
    super();
    this.message = message;
    this.statusCode = code;
  }
}

export function handleErrors(err, req, res, next) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
    stackError: err.stack,
  });
}
