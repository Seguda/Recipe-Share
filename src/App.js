import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {connect} from 'react-redux';
import './app.css';

import Main from './components/main/main';
import Header from './components/header/header';
import Footer from './components/footer/footer';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(App);
