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
}

export interface PostWithUser extends Post {
  user: User
}
