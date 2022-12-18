import { useState, memo } from 'react'

import { TabsProps } from './interface'
import * as Styled from './styles'

const Tabs = ({
  items: initialItems,
  initialActiveItem = initialItems[0].key,
  onChange,
}: TabsProps): JSX.Element => {
  const setActiveItem = (key: string, items: TabsProps['items']) => {
    return items.map((item) => ({ ...item, active: item.key === key }))
  }
  const [items, setItems] = useState(() => {
    return setActiveItem(initialActiveItem, initialItems)
  })

  const handleChange = (key: string) => () => {
    setItems((currentItems) => setActiveItem(key, currentItems))
    onChange?.(key)
  }

  return (
    <Styled.Tabs>
      {items.map(({ key, label, active }) => (
        <Styled.TabsItem key={key}>
          <Styled.TabsButton
            type="button"
            onClick={handleChange(key)}
            active={active}
          >
            {label}
          </Styled.TabsButton>
        </Styled.TabsItem>
      ))}
    </Styled.Tabs>
  )
}

export default memo(Tabs)
