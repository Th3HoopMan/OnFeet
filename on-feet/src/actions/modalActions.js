import { TOGGLE_MODAL} from './actionTypes';

export const toggleModal = (modalName) => dispatch => {
  dispatch({
    type: TOGGLE_MODAL,
    modal: modalName
  })
};
