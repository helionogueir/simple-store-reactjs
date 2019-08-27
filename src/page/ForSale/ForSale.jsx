import React, { Component } from 'react'
import { Title } from '../../container/Title'
import { Products } from '../../container/Products'

class ForSale extends Component {
  render() {
    return (
      <main role="main">
        <Title />
        <div class="py-5 bg-light">
          <div class="container">
            <div class="row">
              <Products />
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export { ForSale }