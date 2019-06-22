import { READ_AUTH } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case READ_AUTH:
      return action.payload || false;
    default:
      return state;
  }
}
