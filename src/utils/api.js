import uniqueid from 'lodash/uniqueId'

const postsUrl = `http://localhost:3001/posts`;
const postsHeaders = {
  Accept: 'application/json',
  Authorization: 'mrlevitas',
}

const voteHeaders = {
  Authorization: 'mrlevitas',
  'Content-Type': 'application/json'
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

export const pushPostVote = (postId, vote) =>
  fetch(`http://localhost:3001/posts/${postId}`, {
    headers: voteHeaders,
    method: "POST",
    body: JSON.stringify({option: vote})
  })
  .then((response) => response.json())

export const pushCommentVote = (commentId, vote) =>
  fetch(`http://localhost:3001/comments/${commentId}`, {
    headers: voteHeaders,
    method: "POST",
    body: JSON.stringify({option: vote})
  })
    .then((response) => response.json())

export const pushPost = (newPost) =>
  fetch(`http://localhost:3001/posts`, {
    headers: voteHeaders,
    method: "POST",
    body: JSON.stringify({ id: uniqueid(),
                          timestamp: Date.now(),
                          title: newPost.title,
                          body: newPost.body,
                          author: newPost.author,
                          category: newPost.category})
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
