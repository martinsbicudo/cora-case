import { StoryObj, Meta } from '@storybook/react'

import Container from '.'

export default {
  title: 'Commons / Container',
  component: Container,
} as Meta

export const Default: StoryObj = {
  args: {
    children: 'children container',
  },
}
