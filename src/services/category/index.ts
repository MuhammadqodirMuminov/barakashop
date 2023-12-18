import { $axios } from "../../config";
import { EndPointes } from "../endpoints";

export const CategoryService = {
  async getAll() {
    const response = await $axios.get(EndPointes.category.get);

    if (response.data.access_token) {
      response.data;
    }
    return response;
  },
};
