import { API } from "@/constants";
import type { IProfile } from "@/interfaces";
import axios from "axios";
import { create } from "zustand";

export interface PlayerStoreState {
  profile: IProfile | undefined;
  setProfile: (profile: IProfile) => void;
  profiles: IProfile[];
  setProfiles: () => void;
  fetchProfile: (address: string) => void;
  getProfileByAddress: (address: string) => IProfile | undefined;
  getPlayerByAddress: (address: string) => IProfile | undefined;
}

export const usePlayerStore = create<PlayerStoreState>((set, get) => ({
  profile: undefined,
  setProfile: (profile: IProfile) => set({ profile }),
  profiles: [],
  setProfiles: async () => {
    try {
      const response = await axios.get(`${API}/profiles`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      set({ profiles: await response.data });
    } catch (error) {
      console.log(error);
    }
  },
  fetchProfile: async (address: string) => {
    try {
      const response = await fetch(`${API}/profiles/${address}`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      set({ profiles: await response.json() });
    } catch (error) {
      console.error(error);
    }
  },
  getProfileByAddress: (address: string) => {
    get().setProfiles();
    const { profiles } = get();
    return profiles.find((player) => player.userAddress === address);
  },
  getPlayerByAddress: (address: string) => {
    const { profiles } = get();
    return profiles.find((player) => player.userAddress === address);
  },
}));
