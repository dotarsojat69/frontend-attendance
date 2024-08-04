import axiosWithConfig from "../axiosWithConfig";
import { IResponseData } from "../types/api";
import { TUser } from "./type";

export const getUser = async () => {
    try {
      const response = await axiosWithConfig.get("/users");
  
      return response.data as IResponseData<TUser>;
    } catch (error: any) {
      throw Error(error.response.data.message);
    }
  };