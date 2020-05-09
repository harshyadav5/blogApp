import React, { Component } from 'react';

import {BrowserRouter} from 'react-router-dom';
import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      // you can set base name by using basename property of BrowserRouter
      <BrowserRouter>
        <div className="App">
          <Blog />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
