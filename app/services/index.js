
export const fetchPosts = () => {
    const URL = 'https://jsonplaceholder.typicode.com/posts';
    return fetch(URL, { method: 'GET' })
      .then(response => response.json());
};
