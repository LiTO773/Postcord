import React, { Component } from 'react'
import { connect } from 'react-redux'

import Bot from './contents/bot'

class Content extends Component {
  render() {
    let Content
    switch (this.props.content[0]) {
      case 'bot':
        Content = Bot
        break;
      default:
        Content = () => <p>Please select something</p>
        break;
    }

    return (
      <div className="content">
        <Content />
      </div>
    )
  }
}

const mapStateToProps = state => ({ content: state.route.mainPanel })

export default connect(mapStateToProps)(Content)