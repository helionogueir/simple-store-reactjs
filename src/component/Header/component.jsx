import React, { Component } from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Store } from "./store.svg"

class Header extends Component {
  render() {
    return (
      <header id="SimpleStore-Header">
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container d-flex justify-content-between">
            <Link to={"/"} className="navbar-brand d-flex align-items-center">
              <Store />
              <strong>Simple Store</strong>
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

export { Header }