import Api from '../api';
import { UPDATE_ALL_PROJECTS, ADD_NEW_PROJECT } from '../constants';

export const getAllProjects = () => {
  return dispatch => {
    Api.getAllProjects().then(projects => {
      dispatch({
        type: UPDATE_ALL_PROJECTS,
        projects
      });
    });
  };
};

export const addNewProject = projectName => {
  return dispatch => {
    Api.addNewProject(projectName).then((addedProject) => {
      dispatch({
        type: ADD_NEW_PROJECT,
        project: addedProject
      })
    });
  }
};
