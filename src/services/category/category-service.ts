// import { IAuthResponseCategory } from "@/store/category/interface";
import { $axios } from '../../config';
import { EndPointes } from '../endpoints';

export const CategoryService = {
    async getOne(id: string) {
        const response = await $axios.get(EndPointes.category.getOne + id);
        return response;
    },

    async getAll() {
        const response = await $axios.get(EndPointes.category.getAll);
        return response;
    },

    async getRecomended() {
        const response = await $axios.get(EndPointes.category.getRecomended);
        return response;
    },
};
