import { API } from "@/constants";
import axios from "axios";
import { create } from "zustand";

export interface WhitelistStoreState {
  isWhitelisted: boolean;
  authToken: string;
  isError: boolean;
  setIsError: (isError: boolean) => void;
  setIsWhitelisted: (isWhitelisted: boolean) => void;
  fetchUserWhitelist: (address: string) => Promise<boolean>;
}

export const useWhitelistStore = create<WhitelistStoreState>((set) => ({
  isWhitelisted: false,
  authToken: "",
  isError: false,
  setIsError: (isError) => set({ isError }),
  setIsWhitelisted: (isWhitelisted: boolean) => set(() => ({ isWhitelisted })),
  fetchUserWhitelist: async (address: string) => {
    try {
      const { data } = await axios.get(
        `${API}/whitelist/users/${address}`
      );
      const status = data.status === 200 ? true : false
      set({ isWhitelisted: status });
      return status;
    } catch (error) {
      set({ isWhitelisted: false });
      console.error(error);
      return false;
    }
  },
}));
