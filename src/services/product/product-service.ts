import { $axios } from '../../config';
import { EndPointes } from '../endpoints';

export const ProductService = {
    async getAll() {
        const response = await $axios.get(EndPointes.product.getAll);
        return response;
    },
    async getRecomended() {
        const response = await $axios.get(EndPointes.product.getRecomended);
        return response;
    },
    async getFrequentlySold() {
        const response = await $axios.get(EndPointes.product.getFrequently);
        return response;
    },
    async getNewest() {
        const response = await $axios.get(EndPointes.product.getNewest);
        return response;
    },
};
