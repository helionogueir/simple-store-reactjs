import React, { Component } from "react"
import "./style.css"

class Footer extends Component {
  render() {
    return (
      <footer className="text-muted">
        <div className="container">
          <p className="float-right">
            <a href="#SimpleStore">Back to top</a>
          </p>
          <p>Simple Store &copy; Helio Nogueira, but please download and customize it for yourself!</p>
        </div>
      </footer>
    )
  }
}

export { Footer }