import { StoryObj, Meta } from '@storybook/react'

import Currency from '.'

export default {
  title: 'Commons / Currency',
  component: Currency,
  argTypes: {
    type: {
      control: 'select',
      defaultValue: 'credit',
      options: ['credit', 'debit', 'refunded'],
    },
    value: {
      description: 'Value in cents',
    },
  },
} as Meta

export const Default: StoryObj = {
  args: {
    value: 8000,
  },
}
