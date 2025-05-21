// src/api/dogs.ts
import {apiClient} from './axiosInstance';

export type Dog = {
  id: string;
  name: string;
  age: string;
  breed: string;
  gender: string;
  imageUrl: string;
};

export const fetchDogs = async (): Promise<Dog[]> => {
  const response = await apiClient.get<Dog[]>('/dogs');
  return response.data;
};
