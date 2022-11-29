export function discussionGQL(categoryId: string | undefined) {
  return `{
    repository(name: "htec-blog", owner: "phamminhhieu21") {
      discussions(first:100, categoryId: "${categoryId}") {
        nodes {
          id
          title
          url
          number
          bodyHTML
          bodyText
          createdAt
          lastEditedAt
          author {
            url
            login
            avatarUrl
          }
          labels(first: 100) {
            nodes {
              name
              color
            }
          }
        }
      }
    }
  }`
}
// Single post
export function discussionDetailGql(postId: number | undefined) {
  return `{
    repository(name: "htec-blog", owner: "phamminhhieu21") {
      discussion(number: ${postId}) {
        number
        title
        bodyHTML
        createdAt
        author {
          login
          url
          avatarUrl
        }
        labels(first: 100) {
          nodes {
            name
            color
          }
        }
      }
    }
  }`
}
//labels
export function discussionLabels(categoryId: string | undefined) {
  return `
  {
    repository(name: "htec-blog", owner: "phamminhhieu21") {
      discussions(first:100, categoryId: "${categoryId}") {
        nodes {
          labels(first: 100) {
            nodes {
              name
              color
            }
          }
        }
      }
    }
  }
  `
}
//profile
export function profileDetail() {
  return `
    viewer {
      login
      bio
      avatarUrl
      websiteUrl
      twitterUsername
      url
      updatedAt
      email
      createdAt
      company
      name
      repositories(first: 100) {
        edges {
          node {
            id
            name
            owner {
              id
              login
              url
            }
          }
        }
      }
      status {
        message
      }
    }
  `
}
