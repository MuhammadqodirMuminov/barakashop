import { EndPointes } from "@/services/endpoints";
import { PaymentService } from "@/services/payment/payment-service";
import { errorCatch } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  IArgPayment,
  ICreatePaymentArg,
  IResponseOnePayment,
} from "./interface";

export const getOnePayment = createAsyncThunk<IResponseOnePayment, IArgPayment>(
  EndPointes.payment.getOne,
  async ({ id }, thunkApi) => {
    try {
      const response = await PaymentService.getOne(id as string);
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return thunkApi.rejectWithValue({ error: errorCatch(error) });
    }
  }
);

export const getAllPayment = createAsyncThunk<IResponseOnePayment>(
  EndPointes.payment.getAll,
  async (_, thunkApi) => {
    try {
      const response = await PaymentService.getAll();
      
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      return thunkApi.rejectWithValue({ error: errorCatch(error) });
    }
  }
);

export const createPayment = createAsyncThunk<
  ICreatePaymentArg,
  IResponseOnePayment
>(EndPointes.payment.create, async (body, thunkApi) => {
  try {
    const response = await PaymentService.create(body);
    if (response.data) {
      return response.data;
    }
  } catch (error) {
    return thunkApi.rejectWithValue({ error: errorCatch(error) });
  }
});
