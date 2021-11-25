// ERROR CODE
const ALREADY_REGISTERED = "auth/email-already-in-use"
const USER_NOT_FOUND =  "auth/user-not-found"
const UNKOWN_ERROR =   "auth/internal-error"
const WRONG_PASSWORD =  "auth/wrong-password"
const INVALID_EMAIL =   "auth/invalid-email"
const TOO_MANY_ATTEMPTS = "auth/too-many-requests"

// ERROR MESSAGE
const ALREADY_REGISTERED_MSG = "Email has already been registered"
const PASSWORD_NOT_MATCH_MSG = "Passwords doesn't match"
const USER_NOT_FOUND_MSG = "Email has not registered"
const WRONG_PASSWORD_MSG = "Password isn't correct"
const INVALID_EMAIL_MSG = "Invalid email"
const LOGIN_UNSUCESS_MSG = "Login unsucessfully"
const REGISTER_UNSUCESS_MSG = "Register unsucessfully"
const TOO_MANY_ATTEMPTS_MSG = "too many attempts, please try again later"

const ERRORCODE = {
    ALREADY_REGISTERED,
    USER_NOT_FOUND,
    UNKOWN_ERROR,
    WRONG_PASSWORD,
    INVALID_EMAIL,
    TOO_MANY_ATTEMPTS,

    ALREADY_REGISTERED_MSG,
    PASSWORD_NOT_MATCH_MSG,
    USER_NOT_FOUND_MSG,
    WRONG_PASSWORD_MSG,
    INVALID_EMAIL_MSG,
    LOGIN_UNSUCESS_MSG,
    REGISTER_UNSUCESS_MSG,
    TOO_MANY_ATTEMPTS_MSG
}
export default ERRORCODE