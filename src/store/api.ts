import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const getPostsApi = async () => {
  return await api.get('posts');
};
export const getPostCommentsApi = async (postId: string | number) => {
  return await api.get(`posts/${postId}/comments`);
};
export const getUserWithPostsCommentsApi = async (userId: string | number) => {
  return await api.get(`/users/${userId}?_embed=posts`);
};
