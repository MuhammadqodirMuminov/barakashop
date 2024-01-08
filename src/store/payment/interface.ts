import { IPaymentService } from "@/services/payment/types";
import { IPayment } from "@/types/payment-types";

export interface IPaymentState {
  loading: {
    getOne: boolean;
    getAll: boolean;
  };
  payment: IPayment | null;
  onePayment: IPayment | null;
  errors: null | string | string[];
}

export interface ICreatePaymentArg extends IPaymentService {}

export interface IResponseOnePayment {
  status: number;
  data: IPayment;
  message: string;
}

export interface IArgPayment {
  id?: string;
}