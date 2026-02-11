export interface Project {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly technologies?: readonly string[]
  readonly githubUrl?: string
  readonly liveUrl?: string
}
