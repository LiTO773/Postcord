import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from '../reducers/index'

import Main from './components/main';

ReactDOM.render(<Provider store={store}><Main /></Provider>, document.getElementById('app'));
