const postsUrl = `http://localhost:3001/posts`;
const postsHeaders = {
  Accept: 'application/json',
  Authorization: 'mrlevitas',
}

export const fetchPosts = () =>
  fetch(postsUrl, {headers : postsHeaders})
    .then((response) => response.json())


const commentsHeaders = {
  Authorization: 'mrlevitas',
  'Content-Type': 'multipart/form-data'
}

export const fetchComments = (postId) =>
  fetch(`http://localhost:3001/posts/${postId}/comments`, {
    headers: commentsHeaders
  })
    .then((response) => response.json())
// export const get = (bookId) =>
//   fetch(`${api}/books/${bookId}`, { headers })
//     .then(res => res.json())
//     .then(data => data.book)

// export const update = (book, shelf) =>
//   fetch(`${api}/books/${book.id}`, {
//     method: 'PUT',
//     headers: {
//       ...headers,
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ shelf })
//   }).then(res => res.json())
