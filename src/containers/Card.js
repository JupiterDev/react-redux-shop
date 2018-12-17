import { connect } from 'react-redux'
import * as cartActions from '../actions/cart'
import { bindActionCreators } from 'redux'
import Card from '../components/Card'

const mapStateToProps = ({ cart }, { id }) => ({
  addedCount: cart.items.reduce(
    (count, thing) => count + (thing.id === id ? 1 : 0),
    0
  )
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Card)
