import jwtDecode from "jwt-decode";

export const authenticate = (
  ACTION_TYPE,
  service
) => values => async dispatch => {
  const { ok, errors, data } = await service(values);
  if (ok) {
    const { token } = data;
    const { userId } = jwtDecode(token);
    dispatch({
      type: ACTION_TYPE,
      payload: { token, userId }
    });
    sessionStorage.setItem("auth", JSON.stringify(token));
  }
  return { ok, errors };
};

//TODO LOGOUT
export const invalidate = ACTION_TYPE => values => async dispatch => {
  dispatch({
    type: ACTION_TYPE,
    payload: null
  });
  sessionStorage.setItem("auth", null);
};
