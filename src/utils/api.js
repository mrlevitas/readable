const url = `http://localhost:3001/posts`;
const headers = {
  Accept: 'application/json',
  Authorization: 'mrlevitas',
}

export const fetchPosts = () =>
  fetch(url, {headers : headers})
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
