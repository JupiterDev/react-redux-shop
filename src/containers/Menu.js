import { connect } from 'react-redux'
import * as cartActions from '../actions/cart'
import { bindActionCreators } from 'redux'
import Menu from '../components/Menu'
import uniqBy from 'lodash/uniqBy'

const mapStateToProps = ({ cart }) => ({
  totalPrice: cart.items.reduce((total, thing) => total + thing.price, 0),
  count: cart.items.length,
  items: uniqBy(cart.items, i => i.id)
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(cartActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu)
