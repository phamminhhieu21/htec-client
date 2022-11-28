export function discussionGQL(categoryId: string | undefined) {
  return `{
    repository(name: "htec-blog", owner: "phamminhhieu21") {
      discussions(first:100, categoryId: "${categoryId}") {
        nodes {
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
        title
        bodyHTML
        createdAt
        author {
          login
          url
          avatarUrl
        }
      }
    }
  }`
}
