import React, { Component } from 'react'
import { connect } from 'react-redux'

import { CHANGE_CONTENT } from '../../../../actions/types'

class Item extends Component {
  render() {
    const bot = this.props.bot.session.user
    return (
      <li onClick={() => this.props.changeContent(this.props.id)}>
        <img src={bot.avatarURL} style={{width: "30px", height: "30px", borderRadius: "100%"}} />
        {bot.username}
      </li>
    )
  }
}

const actions = dispatch => ({
  changeContent: id => dispatch({ type: CHANGE_CONTENT, payload: ['bot', id] })
})

export default connect(null, actions)(Item)