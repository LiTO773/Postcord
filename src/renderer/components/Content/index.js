import React, { Component } from 'react'
import { connect } from 'react-redux'

class Content extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.route}</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({ route: state.route.route })

export default connect(mapStateToProps)(Content)