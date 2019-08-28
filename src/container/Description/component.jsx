import React, { Component } from "react"
import { Actions } from "./actions"
import "./style.css"

class Description extends Component {
  constructor(props) {
    super(props)
    this.state = { title: "", subTitle: "" }
  }
  async componentDidMount() {
    const state = await Actions.loadDescription(this.props.page)
    this.setState(state)
  }
  render() {
    return (
      <section className="jumbotron text-center">
        <div className="container">
          <h1>{this.state.title}</h1>
          <p className="lead text-muted">{this.state.subTitle}</p>
        </div>
      </section>
    )
  }
}

export { Description }