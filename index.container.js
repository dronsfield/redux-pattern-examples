import React, { Component } from 'react'
import { connect } from 'react-redux'

import { selectors, actions } from '../some/path'
import Comp from './Comp'

class CompContainer extends Component {
  doSomething = params => {
    const { dispatch } = this.props
    dispatch(actions.something(params))
  }

  sendDetails = () => {
    const { dispatch, details } = this.props
    dispatch(actions.sendDetails({ details }))
  }

  sendDetailsWithFlag = () => {
    const { dispatch, details, flag } = this.props
    dispatch(actions.sendDetails({ details, flag: ownProps.flag }))
  }

  render () {
    return <Comp
      {...this.props}
      doSomething={this.doSomething}
      sendDetails={this.sendDetails}
      sendDetailsWithFlag={this.sendDetailsWithFlag}
    />
  }
}

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => ({ dispatch })
const mergeProps = ({ state }, { dispatch }, ownProps) => {
  const details = selectors.getDetails(state)
  return {
    details
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(CompContainer)
