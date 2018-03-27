import { connect } from 'react-redux'
import _ from 'lodash'

import { selectors, actions } from '../some/path'
import Comp from './Comp'

const createDoSomething = _.memoize(
  dispatch => params => params => dispatch(actions.something(params))
)
const createSendDetails = _.memoize(
  (dispatch, details) => () => dispatch(actions.sendDetails({ details }))
)
const createSendDetailsWithFlag = _.memoize(
  (dispatch, details, flag) => () => dispatch(actions.sendDetails({ details, flag }))
)

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => ({ dispatch })
const mergeProps = ({ state }, { dispatch }, ownProps) => {
  const details = selectors.getDetails(state)
  const doSomething = createDoSomething(dispatch)
  const sendDetails = createSendDetails(dispatch, details)
  const sendDetailsWithFlag = createSendDetailsWithFlag(dispatch, details, ownProps.flag)
  return {
    details,
    doSomething,
    sendDetails,
    sendDetailsWithFlag
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Comp)
