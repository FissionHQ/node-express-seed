module.exports = {
  AUTH_TOKEN_TYPE: 'bearer',
  GRANT_TYPES: {
    PASSWORD: 'password',
    REFRESH_TOKEN: 'refresh_token',
  },
  ERROR_CODES: {
    UNAUTHORISED: 'UNAUTHORISED',
    FORBIDDEN: 'FORBIDDEN',
    MISSING_REQUIRED_FIELD: 'MISSING_REQUIRED_FIELD',
    INVALID_DATA: 'INVALID_DATA',
    INVALID_FIELD_VALUE: 'INVALID_FIELD_VALUE',
    EMAIL_ALREADY_EXISTS: 'EMAIL_ALREADY_EXISTS',
    REQUEST_FAILED: 'REQUEST_FAILED',
    NO_TOKEN: 'NO_TOKEN',
    USER: {
      READ_FAILED: 'USER_READ_FAILED',
      UPDATE_FAILED: 'USER_UPDATE_FAILED',
      DELETE_FAILED: 'USER_DELETE_FAILED',
      NOT_FOUND: 'USER_NOT_FOUND',
      INACTIVE: 'USER_INACTIVE',
      EMAIL_NOT_VERIFIED: 'USER_EMAIL_NOT_VERIFIED',
      INVALID_CREDENTIALS: 'USER_INVALID_CREDENTIALS',
    },
  },
};