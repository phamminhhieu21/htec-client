export interface Profile {
  bio?: string | null
  avatarUrl?: string | null
  login?: string | null
  name?: string | null
  url?: string | null
  location?: string | null
  websiteUrl?: string | null
  twitterUsername?: string | null
  email?: string | null
  company?: string | null
  createdAt?: string | null
  updatedAt?: string | null
  status?: {
    message?: string | null
  }
  repositories?: {
    edges?: {
      node?: {
        id?: string | null
        name?: string | null
        owner?: {
          id?: string | null
          login?: string | null
          url?: string | null
        }
      }
    }[]
  }
}
