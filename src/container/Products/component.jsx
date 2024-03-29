import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Actions } from "./actions"
import "./style.css"

class ProductsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { products: [] }
  }
  async componentDidMount() {
    try {
      const result = await Actions.loadAllProducts()
      this.setState({ products: result.data })
    } catch (err) {
      console.error(err)
    }
  }
  render() {
    return (
      this.state.products.map(product => (
        <div key={product.id} className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
            <div className="card-body">
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                  <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                </div>
                <small className="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      ))
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(Actions, dispatch)

const Products = connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)

export { Products }