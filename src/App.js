import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Header } from './component/Header'
import { Footer } from './component/Footer'
import { ForSale } from './page/ForSale'
import { store } from './Store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Header />
          <Route exact path='/' component={ForSale} />
          <Route path='/sale' component={ForSale} />
          <Footer />
        </Router>
      </Provider>
    );
  }
}

export { App }
