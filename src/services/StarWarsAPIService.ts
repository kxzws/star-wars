import axios, { AxiosInstance } from 'axios';

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

export interface ISpecies {
  name: string;
  classification: string;
  designation: string;
  average_height: string;
  average_lifespan: string;
  eye_colors: string;
  hair_colors: string;
  skin_colors: string;
  language: string;
  homeworld: string;
  people: Array<string>;
  films: Array<string>;
  url: string;
  created: string;
  edited: string;
}

export interface IStarship {
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: Array<string>;
  pilots: Array<string>;
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

  public getCharacter = async (id: string): Promise<ICharacter> => {
    try {
      const response = await this.axiosInstance.get(`${EAPIRoutes.PEOPLE}${id}/`);
      return response.data;
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

  public getCertainFilms = async (ids: Array<string>): Promise<IFilm[]> => {
    try {
      if (!ids.length) return [];

      const responses = await Promise.all(
        Array.from(ids, (id) => this.axiosInstance.get(`${EAPIRoutes.FILMS}${id}/`))
      );
      return responses.map((resp) => resp.data).flat();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  public getCertainSpecies = async (ids: Array<string>): Promise<ISpecies[]> => {
    try {
      if (!ids.length) return [];

      const responses = await Promise.all(
        Array.from(ids, (id) => this.axiosInstance.get(`${EAPIRoutes.SPECIES}${id}/`))
      );
      return responses.map((resp) => resp.data).flat();
    } catch (error) {
      return Promise.reject(error);
    }
  };

  public getCertainStarships = async (ids: Array<string>): Promise<IStarship[]> => {
    try {
      if (!ids.length) return [];

      const responses = await Promise.all(
        Array.from(ids, (id) => this.axiosInstance.get(`${EAPIRoutes.STARSHIPS}${id}/`))
      );
      return responses.map((resp) => resp.data).flat();
    } catch (error) {
      return Promise.reject(error);
    }
  };
}

export const starWarsAPIService = new StarWarsAPIService();
