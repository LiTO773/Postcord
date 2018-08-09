import { ADD_BOT, DISCORD_ERROR } from '../actions/types'

const INITIAL_STATE = {
  bots: [], // NV
  tokens: [],
  currentBot: {},                       // Stores important info about the current bot
  currentSession: null,                 // Stores the bot session
  status: [null, 'Please select a bot'] // [error/true, error message]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_BOT: // NV
      return { ...state, bots: [...state.bots, action.payload], status: [true] }
    case DISCORD_ERROR:
        return { ...state, status: [false, action.payload] }
    case 'NEW_TOKEN':
      return { ...state, tokens: [...state.tokens, action.payload.token] }
    case 'SET_CURRENT_SESSION':
      return { ...state,
        currentBot: action.payload.currentBot,
        currentSession: action.payload.currentSession,
        status: [true]
      }
    default:
      return state;
  }
}
