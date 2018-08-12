import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CHANGE_ROUTE } from '../../../actions/types'

class Category extends Component {
  render() {
    return (
      <div className="main-category">
        <div className="middle" onClick={() => this.props.changeRoute(this.props.name.toLowerCase())}>
          {this.props.name}
        </div>
      </div>
    )
  }
}

const changeRoute = dispatch => ({
  changeRoute: route => dispatch({ type: CHANGE_ROUTE, payload: route })
})

export default connect(null, changeRoute)(Category)