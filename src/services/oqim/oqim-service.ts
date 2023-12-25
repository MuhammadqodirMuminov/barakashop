import { $axios } from '../../config';
import { EndPointes } from '../endpoints';

export const OqimService = {
    async getOne(id: string) {
        const response = await $axios.get(EndPointes.oqim.getOne + id);
        return response;
    },

    async getAll() {
        const response = await $axios.get(EndPointes.oqim.getAll);
        return response;
    },
};
