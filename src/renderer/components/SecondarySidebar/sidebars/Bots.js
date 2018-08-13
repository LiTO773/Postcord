import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Item from './Item'

import { OPEN_MODAL } from '../../../../actions/types'

class Bots extends Component {
  render() {
    return (
      <Fragment>
        { this.props.bots.map((bot, i) => <Item key={i} id={i} bot={bot} />) }
        <li
          style={{cursor: "pointer", marginTop: "30px", fontSize: "20px"}}
          onClick={this.props.openModal}>
          <b>ADD BOT</b>
        </li>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  bots: state.bots.bots
})

const actions = dispatch => ({
  openModal: () => dispatch({ type: OPEN_MODAL, payload: 'bot' })
})

export default connect(mapStateToProps, actions)(Bots)