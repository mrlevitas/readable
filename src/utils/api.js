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
    body: JSON.stringify({ id: newPost.id,
                          timestamp: newPost.timestamp,
                          title: newPost.title,
                          body: newPost.body,
                          author: newPost.author,
                          category: newPost.category})
  })
    .then((response) => response.json())

export const putPost = (newPost) =>
  fetch(`http://localhost:3001/posts/${newPost.id}`, {
    headers: voteHeaders,
    method: "PUT",
    body: JSON.stringify( {title: newPost.title, body: newPost.body})
  })
    .then((response) => response.json())

export const fetchPost = (postId) =>
  fetch(`http://localhost:3001/posts/${postId}`, {
    headers: postsHeaders,
    method: "GET",
  })
    .then((response) => response.json())

export const deletePost = (postId) =>
  fetch(`http://localhost:3001/posts/${postId}`, {
    headers: voteHeaders,
    method: "DELETE"
  })
    .then((response) => response.json())

export const pushComment = (newComment) =>
  fetch(`http://localhost:3001/comments`, {
    headers: voteHeaders,
    method: "POST",
    body: JSON.stringify({ id: newComment.id,
                          timestamp: newComment.timestamp,
                          body: newComment.body,
                          author: newComment.author,
                          parentId: newComment.parentId})
  }).then((response) => response.json())

export const putComment = (newComment) =>
  fetch(`http://localhost:3001/comments/${newComment.id}`, {
    headers: voteHeaders,
    method: "PUT",
    body: JSON.stringify( {timestamp: newComment.timestamp, body: newComment.body})
  })
    .then((response) => response.json())

export const deleteComment = (commentId) =>
  fetch(`http://localhost:3001/comments/${commentId}`, {
    headers: voteHeaders,
    method: "DELETE"
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
