import store from '../reducers/index'

export default (client) => {
  client.on('message', (msg) => {
    store.dispatch({ type: 'DISCORD_ERROR', payload: msg.member.user.username + ' ' + msg.content })
  })
}