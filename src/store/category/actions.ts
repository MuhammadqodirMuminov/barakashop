import { CategoryService } from "@/services";
import { addNotification, errorCatch } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IArgCategory, IResponseCategory } from "./interface";
import { EndPointes } from "@/services/endpoints";

export const getAllCategory = createAsyncThunk<IResponseCategory, IArgCategory>(
  EndPointes.category.getAll,
  async (_, thunkApi) => {
    try {
      const response = await CategoryService.getAll();
      if (response.data) {
        return response.data
      }
    } catch (error) {
      addNotification(error);
      return thunkApi.rejectWithValue({ error: errorCatch(error) });
    }
  }
);
