import { CHANGE_ROUTE } from '../actions/types'

const INITIAL_STATE = {
  route: "bots"
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_ROUTE:
      return { route: action.payload }
    default:
      return state
  }
}
