export const collectBlogByYear = (posts = []) => {
  return posts.reduce((pre, cur) => {
    const year = cur.date.split('-')[0]
    if (!pre[year]) pre[year] = []
    pre[year].push(cur)
    return pre
  }, {})
}
