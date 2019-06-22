import * as actions from "./types";
import * as api from "../../api";
import * as auth from "./auth";

export const authenticate = auth.authenticate(
  actions.READ_AUTH,
  api.authenticate
);

export const invalidateAuth = auth.invalidate(actions.READ_AUTH);
