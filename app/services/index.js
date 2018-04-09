
export const fetchPosts = () => {
    const URL = 'http://localhost:3000/notes';
    return fetch(URL, { method: 'GET' })
      .then(response => response.json());
};

export const deleteNote = (id) => {
    const URL = `http://localhost:3000/notes/${id}`;
    return fetch(URL, { method: 'DELETE' })
      .then(response => response.json());
};
