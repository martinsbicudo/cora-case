import { StoryObj, Meta } from '@storybook/react'

import Table from '.'
import transactions from './__mocks__/transactions'

export default {
  title: 'Containers / Table',
  component: Table,
} as Meta

export const Default: StoryObj = {
  args: {
    transactions,
  },
}
