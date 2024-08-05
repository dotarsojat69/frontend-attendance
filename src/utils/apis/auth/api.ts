import axiosWithConfig from "@/utils/axiosWithConfig";
import { IResponse, IResponseData, LoginPayload } from "@/utils/types/api";
import { LoginType, RegisterType } from "./types";

export const userLogin = async (body: LoginType) => {
  try {
    const response = await axiosWithConfig.post(`/login`, body);

    return response.data as IResponseData<LoginPayload>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const userRegister = async (body: RegisterType) => {
  try {
    const response = await axiosWithConfig.post(`/register`, body);

    return response.data as IResponse;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};