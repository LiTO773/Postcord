import Discord from 'discord.js'
import { ADD_BOT, DISCORD_ERROR } from '../actions/types'

// Adds a new bot
export const newBot = token => dispatch => {
  const client = new Discord.Client()
  client.login(token)
    .catch(err => {
      dispatch({ type: DISCORD_ERROR, payload: err })
      return
    })

  client.on('ready', () => {
    dispatch({ type: ADD_BOT, payload: {
      avatar: client.user.avatarURL,
      username: client.user.username,
      token
    }})
  })
}