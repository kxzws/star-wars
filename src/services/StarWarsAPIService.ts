import axios, { AxiosInstance } from 'axios';

// const REQUEST_TIMEOUT = 20000;
const QUERY_LIMIT = 10;

enum EAPIRoutes {
  PEOPLE = 'people/',
  FILMS = 'films/',
  SPECIES = 'species/',
  STARSHIPS = 'starships/',
}

export enum EGender {
  ALL = 'all',
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

export interface IFilm {
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
  private axiosInstance: AxiosInstance;

  constructor() {
    if (!process.env.REACT_APP_API_URL) {
      throw new Error('env: REACT_APP_API_URL is not defined');
    }

    this.axiosInstance = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      // timeout: REQUEST_TIMEOUT,
    });
  }

  public getCharactes = async (): Promise<ICharacter[]> => {
    try {
      const response = await this.axiosInstance.get(EAPIRoutes.PEOPLE);
      const pages = Math.ceil(response.data.count / QUERY_LIMIT);

      const responses = await Promise.all(
        Array.from(Array(pages), (_, i) =>
          this.axiosInstance.get(EAPIRoutes.PEOPLE, { params: { page: i + 1 } })
        )
      );

      return responses.map((resp) => resp.data.results).flat();
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
      const pages = Math.ceil(response.data.count / QUERY_LIMIT);

      const responses = await Promise.all(
        Array.from(Array(pages), (_, i) =>
          this.axiosInstance.get(EAPIRoutes.FILMS, { params: { page: i + 1 } })
        )
      );

      return responses.map((resp) => resp.data.results).flat();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  // public getCertainFilms = async (ids: string[]): Promise<IFilm[]> => {
  //   try {
  //     const response = await this.axiosInstance.get(`${EAPIRoutes.FILMS}${id}/`);
  //     return response.data.results;
  //   } catch (error) {
  //     return Promise.reject(error);
  //   }
  // };
}

export const starWarsAPIService = new StarWarsAPIService();
