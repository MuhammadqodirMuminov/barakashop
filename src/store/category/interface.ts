import { ICategory } from "./../../types/category-types";

export interface ICategoryState {
  loading: {
    get: boolean;
  };
  categories: any;
  errors: null | string | string[];
}
export interface IAuthResponseCategory extends ICategory {}


export interface IArgCategory {
	callback: (data: any) => void 
}