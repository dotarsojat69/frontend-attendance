import { checkProperty, valueFormatData } from "@/utils/formatter";
import axiosWithConfig from "../../axiosWithConfig";
import { IResponseData } from "../../types/api";
import { ProfileType, TUser } from "./type";

export const getUser = async () => {
    try {
      const response = await axiosWithConfig.get("/users");
  
      return response.data as IResponseData<TUser>;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  };

  export const updateUser = async (body: ProfileType) => {
    try {
      const formData = new FormData();
      let key: keyof typeof body;
      for (key in body) {
        if (checkProperty(body[key])) {
          formData.append(key, valueFormatData(body[key]));
        }
      }
  
      const response = await axiosWithConfig.put(`/users`, formData);
  
      return response.data as Response;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  };
  
  export const deleteUser = async () => {
    try {
      const response = await axiosWithConfig.delete(`/users`);
  
      return response.data as Response;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  };