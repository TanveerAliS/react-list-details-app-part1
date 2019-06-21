import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from './index.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
