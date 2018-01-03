import { UPDATE_ALL_ITEMS } from "../constants";

export default function(state = {}, action) {
  if (action.type === UPDATE_ALL_ITEMS) {
    return action.items;
  }
  return state;
}
