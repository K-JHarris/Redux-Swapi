import React from "react"
import { connect } from "react-redux"

import { CharacterList } from "../components"
import {get} from '../actions'

class CharacterListView extends React.Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.get()
  }

  render() {
    if (this.props.getting) {
      return (
        <h1>its not time yet!</h1>
      )
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    characters: state.charsReducer.characters,
    getting: state.charsReducer.fetching,
    error: state.charsReducer.error,
  }
}

export default connect(
  mapStateToProps,
  {get})
  (CharacterListView)