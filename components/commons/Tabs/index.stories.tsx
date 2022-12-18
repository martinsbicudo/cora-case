import { StoryObj, Meta } from '@storybook/react'

import Tabs from '.'
import items from './__mocks__/items'
import { TabsProps } from './interface'

export default {
  title: 'Components / Tabs',
  component: Tabs,
  argTypes: {
    initialActiveItem: {
      control: 'select',
      description: 'Initial active <b>key</b> item',
      defaultValue: items[0].key,
      options: items.map(({ key }) => key),
    },
  },
} as Meta

export const Default: StoryObj<TabsProps> = {
  args: {
    items,
  },
}
