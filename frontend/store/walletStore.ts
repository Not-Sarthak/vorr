import { create } from 'zustand';

interface WalletState {
  walletConnected: boolean;
  setWalletConnected: (connected: boolean) => void;
}

export const useWalletStore = create<WalletState>((set) => ({
  walletConnected: false,
  setWalletConnected: (connected: boolean) => set({ walletConnected: connected }),
}));