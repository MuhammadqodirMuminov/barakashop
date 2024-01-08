import { $axios } from "../../config";
import { EndPointes } from "../endpoints";
import { IPaymentService } from "./types";

export const PaymentService = {
  async getOne(id: string) {
    const response = await $axios.get(EndPointes.payment.getOne + id);
    return response;
  },

  async getAll() {
    const response = await $axios.get(EndPointes.payment.getAll);
    return response;
  },

  async create(body: IPaymentService) {
    const response = await $axios.post(EndPointes.payment.create, body);
    return response;
  },
};
