export type Response<T = any> = {
  message: string;
  payload: T;
};

export interface Request {
  path?: string;
  query?: string;
  sort?: "new" | "popular";
  filter?: string;
  limit?: string | number;
  page?: string | number;
}
  
  export interface LoginPayload {
    token: string;
  }
