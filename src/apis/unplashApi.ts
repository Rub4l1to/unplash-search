import axios from 'axios';

export const unplashApi = axios.create({
  baseURL: 'https://api.unsplash.com/search/photos',
  headers: {
    Authorization: `Client-ID ${import.meta.env.VITE_UNPLASH_API_KEY} `,
  },
});
