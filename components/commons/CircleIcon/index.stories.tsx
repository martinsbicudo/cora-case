import { StoryObj, Meta } from '@storybook/react'

import CircleIcon from '.'

export default {
  title: 'Components / CircleIcon',
  component: CircleIcon,
  argTypes: {
    type: {
      control: 'select',
      defaultValue: 'credit',
      options: ['credit', 'debit', 'refunded'],
    },
  },
} as Meta

export const Default: StoryObj = {}
