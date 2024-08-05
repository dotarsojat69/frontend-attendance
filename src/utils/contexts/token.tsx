import {
    ReactNode,
    createContext,
    useMemo,
    useState,
    useContext,
    useCallback,
    useEffect,
  } from "react";
  
  import { useToast } from "@/components/ui/use-toast";
  
  import { getUser } from "../apis/users/api";
import axiosWithConfig, { setAxiosConfig } from "../axiosWithConfig";
import { TUser } from "../apis/users/type";
  
  interface Context {
    token: string;
    user?: TUser;
    changeToken: (token?: string) => void;
  }
  
  interface Props {
    children: ReactNode;
  }
  
  const contextValue = {
    token: "",
    changeToken: () => {},
  };
  
  const TokenContext = createContext<Context>(contextValue);
  
  export function TokenProvider({ children }: Props) {
    const { toast } = useToast();
  
    const [token, setToken] = useState(localStorage.getItem("token") ?? "");
    const [user, setUser] = useState<TUser>();
  
    useEffect(() => {
      setAxiosConfig(token);
      token !== "" && fetchProfile();
    }, [token]);
  
    axiosWithConfig.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          changeToken();
        }
  
        return Promise.reject(error);
      }
    );
  
    const fetchProfile = useCallback(async () => {
      try {
        const result = await getUser();
        setUser(result.payload);
      } catch (error) {
        toast({
          title: "Oops! Something went wrong.",
          description: (error as Error).message,
          variant: "destructive",
        });
      }
    }, [token]);
  
    const changeToken = useCallback(
      (token?: string) => {
        const newToken = token ?? "";
        setToken(newToken);
        if (token) {
          localStorage.setItem("token", newToken);
        } else {
          localStorage.removeItem("token");
          setUser(undefined);
        }
      },
      [token]
    );
  
    const tokenContextValue = useMemo(
      () => ({
        token,
        user,
        changeToken,
      }),
      [token, user, changeToken]
    );
  
    return (
      <TokenContext.Provider value={tokenContextValue}>
        {children}
      </TokenContext.Provider>
    );
  }
  
  export function useToken() {
    const context = useContext(TokenContext);
  
    if (context === undefined) {
      throw new Error("ERROR, useToken must be used within TokenContext");
    }
  
    return context;
  }