import { OPEN_MODAL, CLOSE_MODAL } from '../actions/types'

const INITIAL_STATE = {
  visible: false,
  content: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { visible: true, content: action.payload }
    case CLOSE_MODAL:
      return { visible: false, content: "" }
    default:
      return state
  }
}
