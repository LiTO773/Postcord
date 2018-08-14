import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import Header from './Header'
import Tabs from './Tabs'

import General from './tabs/General'
import Options from './tabs/Options'
import Presences from './tabs/Presences'

class Bot extends Component {
  state = {
    route: 'general'
  }

  handleChange = route => {
    this.setState({ route })
  }

  render() {
    let Content
    switch (this.state.route) {
      case 'general':
        Content = General
        break
      case 'options':
        Content = Options
        break
      case 'presences':
        Content = Presences
        break
      default:
        break
    }

    return (
      <Fragment>
        <Header bot={this.props.bots[this.props.content].session.user} />
        <Tabs changeRoute={this.handleChange} route={this.state.route} />
        <Content bot={this.props.bots[this.props.content].session} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  content: state.route.mainPanel[1],
  bots: state.bots.bots
})

export default connect(mapStateToProps)(Bot)