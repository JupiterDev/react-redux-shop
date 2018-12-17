import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const ItemCard = thing => {
  const { brand, name, image, price, addToCart, addedCount } = thing
  return (
    <Card>
      <Image src={ image } />
      <Card.Content>
        <Card.Header>{ brand }</Card.Header>
        <Card.Meta>
          <span className='date'>{ name }</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='usd' />
          { price }
        </a>
      </Card.Content>
      <Button onClick={addToCart.bind(this, thing)}>
        Добавить в корзину {addedCount > 0 && `[${addedCount}]`}
      </Button>
    </Card>
  )
}

export default ItemCard
