import { type ReactNode } from 'react'

export interface LayoutProps {
  children: ReactNode
}

export type ReactComponent = () => React.JSX.Element
