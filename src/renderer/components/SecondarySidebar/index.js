import React, { Component } from 'react'
import { connect } from 'react-redux'
import Bots from './sidebars/Bots'


class SecondarySidebar extends Component {
  render() {
    let Sidebar
    switch (this.props.route) {
      case 'bots':
        Sidebar = Bots
        break;
      default:
        Sidebar = () => <p>Please select a category</p>
        break;
    }

    return (
      <div className="second-sidebar">
        <Sidebar />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  route: state.route.route
})

export default connect(mapStateToProps)(SecondarySidebar)