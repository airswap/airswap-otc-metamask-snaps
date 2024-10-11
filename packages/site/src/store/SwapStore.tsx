import { create } from 'zustand';

type TakerTypeValues = 'anyone' | 'specificTaker';

type SwapStore = {
  fromToken: string | undefined;
  toToken: string | undefined;
  fromAmount: number | undefined;
  toAmount: number | undefined;
  takerType: TakerTypeValues;
  takerAddress: string | undefined;
  durationLength: number;
  durationUnits: string;
  expiry: number;
  rate: number;
  fee: number;
  total: number; // fromAmount + fee
  setFromToken: (token: string | undefined) => void;
  setToToken: (token: string | undefined) => void;
  setFromAmount: (amount: number | undefined) => void;
  setToAmount: (amount: number | undefined) => void;
  setTakerType: (value: TakerTypeValues) => void;
  setTakerAddress: (address: string | undefined) => void;
  setDurationLength: (durationLength: number) => void;
  setDurationUnits: (durationUnits: string) => void;
  setExpiry: (date: number) => void;
  setRate: (rate: number) => void;
  setFee: (fee: number) => void;
  setTotal: (total: number) => void;
};

export const useSwapStore = create<SwapStore>((set) => ({
  fromToken: undefined,
  toToken: undefined,
  fromAmount: 0,
  toAmount: 0,
  takerType: 'anyone',
  takerAddress: undefined,
  durationLength: 1,
  durationUnits: 'hours',
  expiry: Math.floor(Date.now() / 1000),
  rate: 0,
  fee: 0,
  total: 0,
  setFromToken: (token: string | undefined) => set({ fromToken: token }),
  setToToken: (token: string | undefined) => set({ toToken: token }),
  setFromAmount: (amount: number | undefined) => set({ fromAmount: amount }),
  setToAmount: (amount: number | undefined) => set({ toAmount: amount }),
  setTakerType: (value: TakerTypeValues) => set({ takerType: value }),
  setTakerAddress: (address: string | undefined) =>
    set({ takerAddress: address }),
  setDurationLength: (durationLength: number) => set({ durationLength }),
  setDurationUnits: (durationUnits: string) => set({ durationUnits }),
  setExpiry: (date: number) => set({ expiry: date }),
  setRate: (rate: number) => set({ rate }),
  setFee: (fee: number) => set({ fee }),
  setTotal: (total: number) => set({ total }),
}));
