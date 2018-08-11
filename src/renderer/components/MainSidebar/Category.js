import React, { Component } from 'react'

export default class Category extends Component {
  render() {
    return (
      <div className="main-category">
        <div className="middle">{this.props.title}</div>
      </div>
    )
  }
}