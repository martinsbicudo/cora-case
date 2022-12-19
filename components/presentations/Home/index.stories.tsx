import { StoryObj, Meta } from '@storybook/react'

import Home from '.'
import mswHandlers from './__mocks__/msw'

export default {
  title: 'Presentations / Home',
  component: Home,
} as Meta

export const Default: StoryObj = {
  parameters: {
    msw: {
      handlers: mswHandlers,
    },
  },
}
