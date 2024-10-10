import { create } from 'zustand';

type ForAddressValues = 'anyone' | 'specificTaker';

type SwapStore = {
  fromToken: string | undefined;
  toToken: string | undefined;
  sendAmount: number | undefined;
  receiveAmount: number | undefined;
  forAddress: ForAddressValues;
  duration: string;
  expiry: number;
  rate: number;
  fee: number;
  total: number; // sendAmount + fee
  setFromToken: (token: string | undefined) => void;
  setToToken: (token: string | undefined) => void;
  setSendAmount: (amount: number | undefined) => void;
  setReceiveAmount: (amount: number | undefined) => void;
  setForAddress: (value: ForAddressValues) => void;
  setDuration: (duration: string) => void;
  setExpiry: (date: number) => void;
  setRate: (rate: number) => void;
  setFee: (fee: number) => void;
  setTotal: (total: number) => void;
};

export const useSwapStore = create<SwapStore>((set) => ({
  fromToken: '',
  toToken: '',
  sendAmount: 0,
  receiveAmount: 0,
  forAddress: 'anyone',
  duration: 'hours',
  expiry: Math.floor(Date.now() / 1000),
  rate: 0,
  fee: 0,
  total: 0,
  setFromToken: (token: string | undefined) => set({ fromToken: token }),
  setToToken: (token: string | undefined) => set({ toToken: token }),
  setSendAmount: (amount: number | undefined) => set({ sendAmount: amount }),
  setReceiveAmount: (amount: number | undefined) =>
    set({ receiveAmount: amount }),
  setForAddress: (value: ForAddressValues) => set({ forAddress: value }),
  setDuration: (duration: string) => set({ duration }),
  setExpiry: (date: number) => set({ expiry: date }),
  setRate: (rate: number) => set({ rate }),
  setFee: (fee: number) => set({ fee }),
  setTotal: (total: number) => set({ total }),
}));
