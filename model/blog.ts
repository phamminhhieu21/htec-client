export interface BlogPost {
  id_discussion: string | number | null
  title: string
  url?: string
  discussionUrl?: string
  id?: number
  bodyHTML?: string
  bodyText: string
  createdAt: string
  lastEdited: string
  authorUrl?: authorPost['url']
  authorLogin: authorPost['login']
  authorAvatarUrl: authorPost['avatarUrl']
  tags: string[]
  labels?: labelPost[]
}
export interface BlogDetail {
  id_blog: string | number | undefined
  title: string
  bodyHTML: string
  createdAt: string
  lastEdited?: string
  tags: string[]
  author: {
    name: string
    avatar: string
    url: string
  }
}

export interface authorPost {
  url: string
  login: string
  avatarUrl: string
}
export interface labelPost {
  name?: string | undefined
  color?: string | undefined
}
