import { $axios } from '../../config';
import { EndPointes } from '../endpoints';
import { ICreateOqimBody } from './types';

export const OqimService = {
    async getOne(id: string) {
        const response = await $axios.get(EndPointes.oqim.getOne + id);
        return response;
    },
    async getOneByUserId(id: string) {
        const response = await $axios.get(EndPointes.oqim.getOneByUserId + id);
        return response;
    },
    async getAll() {
        const response = await $axios.get(EndPointes.oqim.getAll);
        return response;
    },
    async create(body: ICreateOqimBody) {
        const response = await $axios.post(EndPointes.oqim.create, body);
        return response;
    },
};
