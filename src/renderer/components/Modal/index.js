import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Bot from './modals/Bot'

class Modal extends Component {
  render() {
    if (!this.props.modal.visible)
      return null
    
    let ModalElement
    switch (this.props.modal.content) {
      case 'bot':
        ModalElement = Bot
        break;
      default:
        return null
    }
    
    return (
      <Fragment>
        <div className="modal">
          <ModalElement />
        </div>
        <div className="backdrop" onClick={this.props.close} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({ modal: state.modal })

const actions = dispatch => ({
  close: () => dispatch({ type: 'CLOSE_MODAL' })
})

export default connect(mapStateToProps, actions)(Modal)