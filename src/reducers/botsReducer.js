import * as types from '../actions/types'

const INITIAL_STATE = {
  bots: [], // {username, avatar, token, session}
  status: [null, 'Please select a bot'] // [error/true, error message]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_BOT:
      return { ...state,
        bots: [...state.bots, action.payload.bot],
        status: [true]
      }
    case types.DISCORD_ERROR:
      return { ...state, status: [false, action.payload] }
    case types.REMOVE_BOT:
      return { ...state, bots: action.payload }
    default:
      return state;
  }
}
