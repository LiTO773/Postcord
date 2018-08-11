import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from '../reducers/index'

// import Main from './components/main';
import Try from './components/try'

ReactDOM.render(<Provider store={store}><Try /></Provider>, document.getElementById('app'))
