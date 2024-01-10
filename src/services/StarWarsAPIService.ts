import axios, { AxiosInstance } from 'axios';

const REQUEST_TIMEOUT = 10000;

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

export interface ICharacter {
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

interface IFilm {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  species: Array<string>;
  starships: Array<string>;
  vehicles: Array<string>;
  characters: Array<string>;
  planets: Array<string>;
  url: string;
  created: string;
  edited: string;
}

export interface ISWAPIResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: ICharacter[];
}

class StarWarsAPIService {
  private baseURL: string;

  private axiosInstance: AxiosInstance;

  constructor() {
    if (!process.env.REACT_APP_API_URL) {
      throw new Error('env: REACT_APP_API_URL is not defined');
    }

    this.baseURL = process.env.REACT_APP_API_URL;
    this.axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      timeout: REQUEST_TIMEOUT,
    });
  }

  public getCharactes = async (name?: string, page?: number): Promise<ICharacter[]> => {
    try {
      const response = await this.axiosInstance.get(EAPIRoutes.PEOPLE, { params: { name, page } });
      return response.data.results;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  public getCharacter = async (id: number): Promise<ICharacter> => {
    try {
      const response = await this.axiosInstance.get(`${EAPIRoutes.PEOPLE}${id}/`);
      return response.data.results;
    } catch (error) {
      return Promise.reject(error);
    }
  };

  public getFilms = async (): Promise<IFilm[]> => {
    try {
      const response = await this.axiosInstance.get(EAPIRoutes.FILMS);
      return response.data.results;
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

export const starWarsAPIService = new StarWarsAPIService();
