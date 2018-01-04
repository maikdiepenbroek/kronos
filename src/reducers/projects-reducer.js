import { UPDATE_ALL_PROJECTS, ADD_NEW_PROJECT } from "../constants";

export default function(state = {}, action) {
  if (action.type === UPDATE_ALL_PROJECTS) {
    return action.projects;
  }
  if(action.type === ADD_NEW_PROJECT) {
    return [ ...state, action.project ];
  }
  return state;
}
