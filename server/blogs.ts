// import { API_URL } from "../constant";
import {
  API_URL,
  GIT_HUB_TOKEN,
  DISCUSSION_CATEGORY_Id,
} from './../constant/index'
import {discussionGQL} from './../server/graphQL'
import {BlogPost, labelPost} from '../model/blog'

export async function getBlogs(): Promise<BlogPost[]> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `token ${GIT_HUB_TOKEN}`,
    },
    body: JSON.stringify({
      query: discussionGQL(DISCUSSION_CATEGORY_Id),
    }),
  })
  let resp = await response.json()
  const discussions = resp.data.repository.discussions.nodes
  const blogs = discussions.map((discussion: any): BlogPost => {
    const {
      title,
      url: discussionUrl,
      number: id,
      bodyHTML,
      bodyText,
      createdAt,
      lastEditedAt: lastEdited,
      author,
      labels,
    } = discussion
    const url = `/blog/${id}`
    const authorUrl = author.url
    const authorLogin = author.login
    const authorAvatarUrl = author.avatarUrl
    const tags = labels.nodes.map((label: labelPost) => label.name)
    const blog = {
      title,
      url,
      discussionUrl,
      id,
      bodyHTML,
      bodyText,
      createdAt,
      lastEdited,
      authorUrl,
      authorLogin,
      authorAvatarUrl,
      tags,
    }
    return blog
  })
  return blogs
}
