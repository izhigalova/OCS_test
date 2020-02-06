export type Id = string | number

interface Company {
  name: string
}

export interface User {
  id: Id
  name: string
  email: string
  company: Company
}

export interface Post {
  userId: Id
  id: Id
  title: string
  body: string
}

export interface PostWithUser extends Post {
  user: User
}

export interface Comment {
  id: Id
  name: string
  email: string
  body: string
}

export interface UiState {
  spinnerIsShown: boolean
  preloaderIsShown: boolean
}

export interface UsersState {
  [key: string]: User
}
