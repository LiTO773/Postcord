import React, { Component } from 'react'
import { connect } from 'react-redux'

import { newBot } from '../../actions/botActions'

class Main extends Component {
  state = {
    token: 'Hello'
  }

  handleChange = (e) => {
    this.setState({token: e.target.value});
  }

  handleNewBot = () => {
    console.log('qliamx')
    this.props.newBot(this.state.token)
  }

  render() {
    return (
      <div>
        <center>
          <h1>(ﾉ◕ヮ◕)ﾉ* Postcord *ヽ(◕ヮ◕ヽ)</h1>
          <input type="text"
            onChange={this.handleChange}
            value={this.state.token} />
          <button onClick={this.handleNewBot}>Add</button>
        </center>
        <p>Status: {this.props.status.toString()}</p>
        <ul>
          { this.props.bots.map(val => (
            <li>
              <img src={val.avatar} style={{width: "30px", height: "30px", borderRadius: "100%"}} />
              {val.username}
            </li>
          )) }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => (
  {
    bots: state.bots.bots,
    status: state.bots.status
  }
)

export default connect(mapStateToProps, { newBot })(Main)