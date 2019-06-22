import { httpService, GET, POST, PUT, DELETE } from "./http";

export const authenticate = url => values => {
  return httpService({
    url: url,
    method: POST,
    body: JSON.stringify(values)
  });
};
