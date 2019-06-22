import * as auth from "./auth";

const AUTH_URL = "/api/auth";

//authentication exports
export const authenticate = auth.authenticate(AUTH_URL);
