import React, { Component } from 'react'
import { connect } from 'react-redux'

import { CLOSE_MODAL } from '../../../../actions/types'
import { newBot } from '../../../../actions/botActions'

class Bot extends Component {
  state = {
    token: 'Add your bot token here',
    addingBot: false,
    error: [false]
  }

  componentWillReceiveProps = nextProps => {
    if (!nextProps.status[0]) {
      this.setState({ error: [true, nextProps.status[1]], addingBot: false })
    } else {
      this.setState({ addingBot: false })
      this.props.closeModal()
    }
  }

  handleChange = (e) => {
    this.setState({token: e.target.value});
  }

  handleNewBot = () => {
    this.props.newBot(this.state.token)
    this.setState({ addingBot: true, error: [false] })
  }

  render() {
    return (
      <div>
        <h5>OH, ANOTHER BOT HUH?</h5>
        <input type="text"
          onChange={this.handleChange}
          value={this.state.token} />
        <button onClick={this.handleNewBot}>Add</button>
        { this.state.addingBot ? <p>Adding your bot 😊🤖</p> : null }
        { this.state.error[0] ? <p><b>{this.state.error[1].toString()}</b></p> : null}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bots: state.bots.bots,
  status: state.bots.status
})

const actions = dispatch => ({
  newBot: token => newBot(token)(dispatch),
  closeModal: () => dispatch({ type: CLOSE_MODAL })
})

export default connect(mapStateToProps, actions)(Bot)