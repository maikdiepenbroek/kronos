import Api from '../api';
import {
    UPDATE_ALL_ITEMS
} from '../constants';

export const getAllItems = () => {
    return dispatch => {
      Api.getAllItems().then(items => {
        dispatch({
          type: UPDATE_ALL_ITEMS,
          items,
        });
      });
    };
  };