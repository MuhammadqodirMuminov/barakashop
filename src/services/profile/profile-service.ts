import { $axios } from "../../config";
import { EndPointes } from "../endpoints";
import { IBody } from "./../../types/edit-password";

export const ProfileService = {
  async editPassword(id: string, body: IBody) {
    const response = await $axios.put(
      EndPointes.profile.editPassword + id,
      body
    );
    return response;
  },
};
