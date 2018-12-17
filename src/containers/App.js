import { connect } from 'react-redux'
import * as clothesActions from '../actions/clothes'
import { bindActionCreators } from 'redux'
import App from '../components/App'
import orderBy from 'lodash/orderBy'

const sortByType = (clothes, sortType) => {
  switch (sortType) {
    case 'popular':
      return orderBy(clothes, 'popular', 'desc')
    case 'priceLow':
      return orderBy(clothes, 'price', 'asc')
    case 'priceHight':
      return orderBy(clothes, 'price', 'desc')
    default:
      return clothes
  }
}

const filterClothes = (clothes, searchQuery) =>
  clothes.filter(
    obj =>
      obj.brand.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
      obj.name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0
  )

const searchClothes = (clothes, sortType, searchQuery) => {
  return sortByType(filterClothes(clothes, searchQuery), sortType)
}

const mapStateToProps = ({ clothes, sort }) => ({
  clothes:
    clothes.items &&
    searchClothes(clothes.items, sort.sortBy, sort.searchQuery),
  isReady: clothes.isReady
})

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(clothesActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
