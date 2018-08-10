import * as types from '../actions/types'

const INITIAL_STATE = {
  bots: [],
  currentBot: null,                     // Stores the location in the bots array
  currentSession: null,                 // Stores the bot session
  status: [null, 'Please select a bot'] // [error/true, error message]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_BOT:
      return { ...state,
        bots: [...state.bots, action.payload.bot],
        status: [true],
        currentBot: state.bots.length,
        currentSession: action.payload.session
      }
    case types.DISCORD_ERROR:
      return { ...state, status: [false, action.payload] }
    case types.CHANGE_CURRENT_BOT:
      return { ...state, currentBot: action.payload }
    case types.REMOVE_CURRENT_BOT:
      return { ...state, currentBot: null, currentSession: null }
    case types.REMOVE_BOT:
      return { ...state, bots: action.payload }
    default:
      return state;
  }
}
