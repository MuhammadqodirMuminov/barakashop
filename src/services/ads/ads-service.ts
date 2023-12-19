import { $axios } from '@/config';
import { EndPointes } from '../endpoints';

export const AdsService = {
    async getAll() {
        const response = await $axios.get(EndPointes.ads.getAll);
        return response;
    },
};
