//* Interfaces
import { IImages } from '@/interfaces';

//* Apis
import { unplashApi } from '../apis';

export const getPhotos = async (query: string): Promise<IImages.Images[]> => {
  const response = await unplashApi.get(`/photos?per_page=20&query=${query}`);
  return response.data;
};
