import { create } from "zustand";

interface WalletState {
  walletConnected: boolean;
  publicKey: string;
  isSignedIn: boolean;
  setWalletConnected: (connected: boolean) => void;
  setPublicKey: (key: string) => void;
  setIsSignedIn: (signedIn: boolean) => void;
}

export const useWalletStore = create<WalletState>((set) => ({
  walletConnected: false,
  publicKey: "",
  isSignedIn: false,
  setWalletConnected: (connected: boolean) =>
    set({ walletConnected: connected }),
  setPublicKey: (key: string) => set({ publicKey: key }),
  setIsSignedIn: (signedIn: boolean) => set({ isSignedIn: signedIn }),
}));
