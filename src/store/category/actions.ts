import { CategoryService } from "@/services";
import { addNotification, errorCatch } from "@/utils";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IArgCategory } from "./interface";

export const getAllCategory = createAsyncThunk<any, IArgCategory>(
  "get/all-category",
  async ({ callback }, thunkApi) => {
    try {
      const response = await CategoryService.getAll();
      if (response.data) {
        callback(response.data);
      }
    } catch (error) {
      addNotification(error);
      return thunkApi.rejectWithValue({ error: errorCatch(error) });
    }
  }
);
