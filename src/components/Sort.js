import React from 'react'
import { Input, Menu } from 'semantic-ui-react'

const Sort = ({ setSort, sortBy, searchQuery, setSearchQuery }) => (
    <Menu secondary>
      <Menu.Item
        active={sortBy === 'all'}
        onClick={setSort.bind(this, 'all')}>
        Новинки
      </Menu.Item>
      <Menu.Item
        active={sortBy === 'popular'}
        onClick={setSort.bind(this, 'popular')}>
        Полулярные
      </Menu.Item>
      <Menu.Item
        active={sortBy === 'priceLow'}
        onClick={setSort.bind(this, 'priceLow')}>
        Дешевле
      </Menu.Item>
      <Menu.Item
        active={sortBy === 'priceHight'}
        onClick={setSort.bind(this, 'priceHight')}>
        Дороже
      </Menu.Item>
      <Menu.Menu position='right'>
          <Menu.Item>
            <Input
              icon='search'
              value={searchQuery}
              placeholder='Поиск...'
              onChange={e => setSearchQuery(e.target.value)}
            />
          </Menu.Item>
        </Menu.Menu>
    </Menu>
)

export default Sort
