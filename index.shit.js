import { connect } from 'react-redux'

import { selectors, actions } from '../some/path'
import Comp from './Comp'

const mapStateToProps = state => ({ state })
const mapDispatchToProps = dispatch => ({ dispatch })
const mergeProps = ({ state }, { dispatch }, ownProps) => {
  const details = selectors.getDetails(state)
  const doSomething = params => dispatch(actions.something(params))
  const sendDetails = () => dispatch(actions.sendDetails({ details }))
  const sendDetailsWithFlag = () => dispatch(actions.sendDetails({ details, flag: ownProps.flag }))
  return {
    ...ownProps,
    details,
    doSomething,
    sendDetails,
    sendDetailsWithFlag
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Comp)
