import React, { Component } from "react"
import { Description } from "../../container/Description"
import { Products } from "../../container/Products"

class ForSale extends Component {
  render() {
    return (
      <main role="main">
        <Description page="ForSale" />
        <div className="py-5 bg-light">
          <div className="container">
            <div className="row">
              <Products category="all" />
            </div>
          </div>
        </div>
      </main>
    )
  }
}

export { ForSale }