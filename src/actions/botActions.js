import Discord from 'discord.js'
import store from '../reducers/index'
import { ADD_BOT, DISCORD_ERROR, CHANGE_CURRENT_BOT, REMOVE_CURRENT_BOT, REMOVE_BOT } from '../actions/types'

// Adds a new bot to the state and sets it as the current session
// If an error occurs an error payload is sent
export const newBot = token => dispatch => {
  const client = new Discord.Client()
  client.login(token)
    .catch(err => {
      dispatch({ type: DISCORD_ERROR, payload: err })
      return
    })

  client.on('ready', () => {
    dispatch({ type: ADD_BOT, payload: {
      bot: {
        avatar: client.user.avatarURL,
        username: client.user.username,
        token
      },
      session: client
    }})
  })
}

// Changes the current bot
export const changeCurrentBot = index => dispatch => {
  dispatch({ type: CHANGE_CURRENT_BOT, payload: index })
}

// Remove a bot
export const removeBot = index => dispatch => {
  let currentState = {...store.getState()}.bots
  const newBots = [
    ...currentState.bots.slice(0, index),
    ...currentState.bots.slice(index+1)
  ]
  
  dispatch({ type: REMOVE_BOT, payload: newBots })
  
  if (currentState.currentBot === index) {
    // Checks if there are still any bots left

    if (newBots.length !== 0) {
      dispatch({ type: CHANGE_CURRENT_BOT, payload: newBots.length - 1 })
    } else {
      dispatch({ type: REMOVE_CURRENT_BOT })
    }
  }
}