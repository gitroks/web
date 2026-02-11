export interface ContactFormData {
  readonly name: string
  readonly email: string
  readonly message: string
}

export interface ContactFormEvent extends React.FormEvent<HTMLFormElement> {
  readonly target: HTMLFormElement
}
