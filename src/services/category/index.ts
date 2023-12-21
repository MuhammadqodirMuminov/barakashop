// import { IAuthResponseCategory } from "@/store/category/interface";
import { $axios } from "../../config";
import { EndPointes } from "../endpoints";

export const CategoryService = {
  async getAll() {
    const response = await $axios.get(EndPointes.category.getAll);
    return response;
  },
};
