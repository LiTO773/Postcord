import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    return (
      <li>
        <img src={this.props.bot.avatar} style={{width: "30px", height: "30px", borderRadius: "100%"}} />
        {this.props.bot.username}
      </li>
    )
  }
}
