import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Tabs from './Tabs'

class Bot extends Component {
  state = {
    route: 'general'
  }

  handleChange = route => {
    this.setState({ route })
  }

  render() {
    const bot = this.props.bots[this.props.content].session.user
    return (
      <Fragment>
        <Header bot={bot} />
        <Tabs changeRoute={this.handleChange} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  content: state.route.mainPanel[1],
  bots: state.bots.bots
})

export default connect(mapStateToProps)(Bot)