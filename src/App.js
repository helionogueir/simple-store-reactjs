import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Header } from './component/Header'
import { Footer } from './component/Footer'
import { ForSale } from './page/ForSale'

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact path='/' component={ForSale} />
        <Route path='/sale' component={ForSale} />
        <Footer />
      </Router>
    );
  }
}

export { App }
