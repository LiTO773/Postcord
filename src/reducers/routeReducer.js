import { CHANGE_ROUTE, CHANGE_CONTENT } from '../actions/types'

const INITIAL_STATE = {
  route: "bots",
  mainPanel: ['empty', ''] // Type of content, content
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_ROUTE:
      return { ...state, route: action.payload }
    case CHANGE_CONTENT:
      return { ...state, mainPanel: action.payload }
    default:
      return state
  }
}
