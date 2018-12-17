import { connect } from 'react-redux'
import * as sortActions from '../actions/sort'
import { bindActionCreators } from 'redux'
import Sort from '../components/Sort'

const mapStateToProps = ({ clothes, sort }) => ({
  sortBy: sort.sortBy
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(sortActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Sort)
