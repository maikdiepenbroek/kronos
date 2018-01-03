import { UPDATE_ALL_PROJECTS } from "../constants";

export default function(state = {}, action) {
  if (action.type === UPDATE_ALL_PROJECTS) {
    return action.projects;
  }
  return state;
}
