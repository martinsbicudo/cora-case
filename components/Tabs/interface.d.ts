export interface TabsProps {
  items: {
    key: string
    label: string
  }[]
  initialActiveItem?: string
  onChange?: (key: string) => void
}

export interface StyledTabsButtonProps {
  active: boolean
}
