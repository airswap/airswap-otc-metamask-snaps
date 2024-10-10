import { create } from 'zustand';

type TakerTypeValues = 'anyone' | 'specificTaker';

type SwapStore = {
  fromToken: string | undefined;
  toToken: string | undefined;
  sendAmount: number | undefined;
  receiveAmount: number | undefined;
  takerType: TakerTypeValues; // Updated from 'forAddress' to 'takerType'
  takerAddress: string | undefined; // New takerAddress for ETH or ENS address
  durationLength: number;
  durationUnits: string;
  expiry: number;
  rate: number;
  fee: number;
  total: number; // sendAmount + fee
  setFromToken: (token: string | undefined) => void;
  setToToken: (token: string | undefined) => void;
  setSendAmount: (amount: number | undefined) => void;
  setReceiveAmount: (amount: number | undefined) => void;
  setTakerType: (value: TakerTypeValues) => void; // Updated from 'setForAddress' to 'setTakerType'
  setTakerAddress: (address: string | undefined) => void; // New setter for takerAddress
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
  sendAmount: 0,
  receiveAmount: 0,
  takerType: 'anyone', // Default value 'anyone'
  takerAddress: undefined, // Starts undefined until user enters it
  durationLength: 1,
  durationUnits: 'hours',
  expiry: Math.floor(Date.now() / 1000),
  rate: 0,
  fee: 0,
  total: 0,
  setFromToken: (token: string | undefined) => set({ fromToken: token }),
  setToToken: (token: string | undefined) => set({ toToken: token }),
  setSendAmount: (amount: number | undefined) => set({ sendAmount: amount }),
  setReceiveAmount: (amount: number | undefined) =>
    set({ receiveAmount: amount }),
  setTakerType: (value: TakerTypeValues) => set({ takerType: value }), // Updated to setTakerType
  setTakerAddress: (address: string | undefined) =>
    set({ takerAddress: address }), // New setter for takerAddress
  setDurationLength: (durationLength: number) => set({ durationLength }),
  setDurationUnits: (durationUnits: string) => set({ durationUnits }),
  setExpiry: (date: number) => set({ expiry: date }),
  setRate: (rate: number) => set({ rate }),
  setFee: (fee: number) => set({ fee }),
  setTotal: (total: number) => set({ total }),
}));
