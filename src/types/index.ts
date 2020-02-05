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
  id: Id
  title: string
  body: string
}

export interface PostWithUser extends Post {
  user: User
}

export interface Comment {
  id: Id
}
