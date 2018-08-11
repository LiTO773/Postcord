import Discord from 'discord.js'
import Bot from '../helpers/botFunction'
import store from '../reducers/index'
import { ADD_BOT, DISCORD_ERROR, REMOVE_BOT } from '../actions/types'

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
        token,
        session: Bot(client)
      }
    }})
  })
}

// Remove a bot
export const removeBot = index => dispatch => {
  const currentState = {...store.getState()}.bots
  const newBots = [
    ...currentState.bots.slice(0, index),
    ...currentState.bots.slice(index+1)
  ]
  
  dispatch({ type: REMOVE_BOT, payload: newBots })
}