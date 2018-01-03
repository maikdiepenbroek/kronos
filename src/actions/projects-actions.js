import Api from '../api';
import {
    UPDATE_ALL_PROJECTS
} from '../constants';

export const getAllProjects = () => {
    return dispatch => {
      Api.getAllProjects().then(projects => {
        dispatch({
          type: UPDATE_ALL_PROJECTS,
          projects,
        });
      });
    };
  };