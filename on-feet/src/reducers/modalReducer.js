import { TOGGLE_MODAL } from '../actions/actionTypes';

const initialState = {
 modal: "", isHidden: true
};

//Receives an action, and updates state based on action
export default function(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modal: action.modal,
        isHidden: !state.isHidden
      };
    default:
      return state;
  }
}
