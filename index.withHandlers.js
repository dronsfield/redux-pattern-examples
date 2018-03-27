import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'

import { selectors, actions } from '../some/path'
import Comp from './Comp'

const mapStateToProps = state => ({
  details: selectors.getDetails(state)
})

export default compose(
  connect(mapStateToProps),
  withHandlers({
    doSomething: ({ dispatch }) => params => dispatch(actions.something(params)),
    sendDetails: ({ dispatch, details }) => () => dispatch(actions.sendDetails({ details })),
    sendDetailsWithFlag: ({ dispatch, details, flag }) => () => dispatch(actions.sendDetails({ details, flag }))
  })
)(Comp)
