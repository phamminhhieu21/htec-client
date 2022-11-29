// import { API_URL } from "../constant";
import {
  API_URL,
  GIT_HUB_TOKEN,
  DISCUSSION_CATEGORY_Id,
} from './../constant/index'
import {
  discussionGQL,
  discussionDetailGql,
  discussionLabels,
} from './../server/graphQL'
import {BlogPost, labelPost, BlogDetail} from '../model/blog'

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
      id : id_discussion,
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
      id_discussion,
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

export async function getBlogDetail(blogId: number): Promise<BlogDetail> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `token ${GIT_HUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query: discussionDetailGql(blogId)}),
  })
  let res = await response.json()
  let discussion = res.data.repository.discussion
  const {
    author: {url: authorUrl, login: authorName, avatarUrl: authorAvatar},
    createdAt,
    title: title,
    bodyHTML: html,
    number :  id_blog,
    labels,
  } = discussion
  const tags = labels.nodes.map((label: labelPost) => label.name)
  const detail = {
    id_blog,
    author: {url: authorUrl, name: authorName, avatar: authorAvatar},
    createdAt,
    title,
    bodyHTML: html,
    tags : tags
  }
  return detail
}

export async function getLabels(): Promise<labelPost[]> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      Authorization: `token ${GIT_HUB_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({query: discussionLabels(DISCUSSION_CATEGORY_Id)}),
  })
  let res = await response.json()
  let labels = res.data.repository.discussions.nodes
  let summaryLabels: labelPost[] = []
  labels.forEach((label: any) => {
    const tags = label.labels.nodes
    for (const tag of tags) {
      const check = summaryLabels.find((item: labelPost) => item.name === tag.name)
      if (!check) {
        summaryLabels.push({
          name: tag.name,
          color: tag.color,
        })
      }
    }
  })
  return summaryLabels
}
