class HttpError extends Error {
  constructor(message, errorCode) {
    super(message);
    this.code = errorCode;
  }
}

class NoAuthError {
  constructor(message) {
    this.message = message;
    this.status = 401;
  }
}

module.exports.HttpError = HttpError;
exports.NoAuthError = NoAuthError;