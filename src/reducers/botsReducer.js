import { ADD_BOT, DISCORD_ERROR, REMOVE_BOT } from '../actions/types'

const INITIAL_STATE = {
  bots: [], // {username, avatar, token, session}
  status: [null, 'Please select a bot'] // [error/true, error message]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_BOT:
      return { ...state,
        bots: [...state.bots, action.payload.bot],
        status: [true]
      }
    case DISCORD_ERROR:
      return { ...state, status: [false, action.payload] }
    case REMOVE_BOT:
      return { ...state, bots: action.payload }
    default:
      return state
  }
}
