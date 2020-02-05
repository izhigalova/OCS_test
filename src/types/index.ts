interface Company {
  name: string
}

export interface User {
  id: number | string
  name: string
  email: string
  company: Company
}

export interface Post {
  id: number | string
  title: string
}

export interface PostWithUser extends Post {
  user: User
}
