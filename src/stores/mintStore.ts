// @ts-nocheck
import {
  encodePacked,
  getAddress,
  keccak256,
  hexToBytes as originalHexToBytes,
} from "viem";
import { create, StoreApi } from "zustand";

// Wrapper function for hexToBytes that checks if hex is defined and not empty
const hexToBytes = (hex: string): Uint8Array => {
  if (!hex) {
    throw new Error("Hex string is undefined or empty");
  }
  return originalHexToBytes(hex);
};

export interface MintMessageStoreState {
  activeStepIndex: number;
  setActiveStepIndex: (activeStepIndex) => void;
  activeStepDotIndex: number;
  setActiveStepDotIndex: (activeStepDotIndex) => void;
  formData: DataMintQuest;
  setFormData: (formData) => void;
  isSuccessful: boolean;
  setIsSuccessful: (isSuccessful) => void;
  mintMessage: string;
  setMintMessage: (mintMessage: string) => void;
  isMinted: boolean;
  setIsMinted: (isMinted: boolean) => void;
  showMintModal: boolean;
  setShowMintModal: (showMintModal: boolean) => void;
  showConfetti: boolean;
  setShowConfetti: (showConfetti: boolean) => void;
  convertHexToBytes: (hex: string) => Uint8Array;
  getSignedMessage: (ggProfiles: string, address: string) => string;
}

export const useMintStore = create<MintMessageStoreState>(
  (set: StoreApi<MintMessageStoreState>["setState"]) => ({
    activeStepIndex: 0,
    setActiveStepIndex: (activeStepIndex) => set({ activeStepIndex }),
    activeStepDotIndex: 0,
    setActiveStepDotIndex: (activeStepDotIndex) => set({ activeStepDotIndex }),
    formData: {} as DataMintQuest,
    setFormData: (formData) => set({ formData }),
    isSuccessful: false,
    setIsSuccessful: (isSuccessful) => set({ isSuccessful }),
    mintMessage: "",
    setMintMessage: (mintMessage: string) =>
      set((state) => ({ ...state, mintMessage })),
    isMinted: false,
    setIsMinted: (isMinted: boolean) =>
      set((state) => ({ ...state, isMinted })),
    showMintModal: false,
    setShowMintModal: (showMintModal: boolean) => set({ showMintModal }),
    showConfetti: false,
    setShowConfetti: (showConfetti: boolean) =>
      set((state) => ({ ...state, showConfetti })),
    convertHexToBytes: hexToBytes,
    getSignedMessage: (ggProfiles: string, address: string) => {
      if (!ggProfiles || !address) {
        throw new Error("Address is undefined");
      }

      const hashedMessage = keccak256(
        encodePacked(
          ["address", "address"],
          [getAddress(ggProfiles), getAddress(address)]
        )
      );

      return hashedMessage.toString();
    },
  })
);
