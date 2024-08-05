import { jwtDecode } from "jwt-decode";
import { type StateCreator } from "zustand";
import { ITokenData, LoginPayload } from "../types/api";
import { TUser } from "../apis/users/type";

export interface AuthStore {
  token: string | null;
  user: TUser | null;
  decodedToken: ITokenData | null;
  setUser: (dataUser: TUser) => void;
  addAuth: (data: LoginPayload) => void;
  resetAuth: () => void;
}

export const authStoreCreator: StateCreator<AuthStore> = (set) => ({
  token: localStorage.getItem("token") || null,
  user: null,
  decodedToken: null,
  setUser: (user) => set({ user }),
  addAuth: (data) => {
    try {
        console.log("Data received in addAuth:", data); // Tambahkan log ini
        if (!data || !data.token) {
          throw new Error("Token is missing or undefined");
        }
      const decoded = jwtDecode<ITokenData>(data.token);
      set(() => ({
        token: data.token,
        decodedToken: decoded,
      }));
      localStorage.setItem("token", data.token);
    } catch (error) {
      console.error("Error decoding token:", error);
    }
  },
  resetAuth: () => {
    localStorage.removeItem("token");
    set({ token: null, user: null, decodedToken: null });
  },
});