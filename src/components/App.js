import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import axios from 'axios'
import { Card } from 'semantic-ui-react'

import ItemCard from '../containers/Card'
import Sort from '../containers/Sort'
import Menu from '../containers/Menu'

class App extends Component {

  componentDidMount() {
    const { setClothes } = this.props
    axios.get('/src/clothes.json').then(({ data }) => {
      setClothes(data)
    })
  }

  render() {
    const { clothes, isReady} = this.props
    return (
      <Container>
        <Menu />
        <Sort />
        <Card.Group itemsPerRow={4}>
          {!isReady
            ? "Загрузка..."
            : clothes.map(item => (
              <ItemCard { ...item } key={ item.id }/>
            ))
          }
        </Card.Group>
      </Container>
    )
  }
}

export default App
