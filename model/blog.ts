export interface BlogPost {
  title: string
  url?: string
  discussionUrl?: string
  id?: number
  bodyHTML?: string
  bodyText: string
  createdAt: string
  lastEdited?: string | null
  authorUrl?: authorPost['url']
  authorLogin: authorPost['login']
  authorAvatarUrl: authorPost['avatarUrl']
  tags: labelPost[]
}
export interface BlogDetail {
  title: string
  bodyHTML: string
  createdAt: string
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
  color?: string |  undefined
}
