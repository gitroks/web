import { type ReactNode } from 'react'

export interface SkillCategory {
  readonly category: string
  readonly skills: readonly { label: string; icon: ReactNode }[]
}
