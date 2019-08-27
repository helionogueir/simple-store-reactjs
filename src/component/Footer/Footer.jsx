import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component {
  render() {
    return (
      <footer class="text-muted">
        <div class="container">
          <p class="float-right">
            <a href="#SimpleStore-Header">Back to top</a>
          </p>
          <p>Simple Store &copy; Helio Nogueira, but please download and customize it for yourself!</p>
        </div>
      </footer>
    )
  }
}

export { Footer }