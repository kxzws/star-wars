import axios, { AxiosInstance } from 'axios';

const REQUEST_TIMEOUT = 3000;

enum EAPIRoutes {
  PEOPLE = 'people/',
  FILMS = 'films/',
  SPECIES = 'species/',
  STARSHIPS = 'starships/',
}

export enum EGender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}

interface ICharacter {
  name: string;
  birth_year: string;
  eye_color: string;
  gender: string;
  hair_color: string;
  height: string;
  mass: string;
  skin_color: string;
  homeworld: string;
  films: Array<string>;
  species: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  url: string;
  created: string;
  edited: string;
}

class APIService {
  private baseURL: string;
  private axiosInstance: AxiosInstance;

  constructor() {
    if (!process.env.REACT_APP_API_URL) {
      throw new Error('env: REACT_APP_API_URL is not defined');
    }

    this.baseURL = process.env.REACT_APP_API_URL;
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      timeout: REQUEST_TIMEOUT,
    });
  }

  public getCharactes = async (
    movies?: Array<number>,
    name?: string,
    gender?: EGender,
    mass?: { from: number; to: number }
  ): Promise<ICharacter[]> => {
    try {
      const response = await this.axiosInstance.get(EAPIRoutes.PEOPLE);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  public getCharacter = async (id: number): Promise<ICharacter> => {
    try {
      const response = await this.axiosInstance.get(`${EAPIRoutes.PEOPLE}${id}/`);
      return response.data;
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

export const APIServiceInstance = new APIService();
