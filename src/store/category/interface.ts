import { ICategory } from "./../../types/category-types";

export interface ICategoryState {
  loading: {
    get: boolean;
  };
  categories: ICategory[] | null;
  errors: null | string | string[];
}
export interface IResponseCategory {
  status: number;
  data: ICategory[];
  message: string;
}


export interface IArgCategory {}