import HttpStatusCodes from "../constants/HttpStatusCodes";

/**
 * Error with status code and message
 */
class ApiError extends Error {
  status: HttpStatusCodes;
  constructor(status: HttpStatusCodes, message: string) {
    super(message), (this.status = status);
  }
}

export default ApiError;
