import { $axios } from '../../config';
import { EndPointes } from '../endpoints';
import { IOnSaleProductQuery } from './types';

export const ProductService = {
    async getOne(id: string) {
        const response = await $axios.get(EndPointes.product.getOne + id);
        return response;
    },
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
    async getOnSale({ page, limit }: IOnSaleProductQuery) {
        const response = await $axios.get(
            `${EndPointes.product.getOnSale}?page=${page}&limit=${limit}`
        );
        return response;
    },
};
