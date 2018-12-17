import React from 'react'
import { Menu, Popup, List, Button, Image } from 'semantic-ui-react'

const CartComponent = ({ id, brand, image, removeFromCart }) => (
  <List selection divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={removeFromCart.bind(this, id)} color="red">Удалить</Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content>{brand}</List.Content>
    </List.Item>
  </List>
)

const MenuComponent = ({ totalPrice, count, items }) => (
  <Menu>
    <Menu.Item name='title'>
      Shoe shop
    </Menu.Item>

    <Menu.Menu position='right'>
      <Menu.Item name='result'>
        Итого &nbsp; <b>{ totalPrice }</b> &nbsp; $
      </Menu.Item>

      <Popup
        trigger={
          <Menu.Item name='cart'>
            Корзина (<b>{ count }</b>)
          </Menu.Item>
        }
        content={items.map(thing => <CartComponent {...thing} key={ thing.id }/>)}
        on="click"
        hideOnScroll
      />
    </Menu.Menu>
  </Menu>
)

export default MenuComponent
