import { create } from 'zustand';

import { convertToUnixTimestamp } from '../utils/convertToUnixTimestamp';

export type TakerTypeValues = 'anyone' | `0x${string}`;

export type DurationUnits = 'MINUTES' | 'HOURS' | 'DAYS' | 'WEEKS';

type SwapStore = {
  fromToken: string | undefined;
  toToken: string | undefined;
  fromAmount: number | undefined;
  toAmount: number | undefined;
  takerType: TakerTypeValues;
  takerAddress: string | undefined;
  durationLength: number;
  durationUnits: DurationUnits;
  expiry: number;
  rate: number;
  fee: string;
  // Modal state
  isTokenSelectorModalOpen: boolean;
  modalTokenType: 'fromToken' | 'toToken' | null;

  setFromToken: (token: string | undefined) => void;
  setToToken: (token: string | undefined) => void;
  setFromAmount: (amount: number | undefined) => void;
  setToAmount: (amount: number | undefined) => void;
  setTakerType: (value: TakerTypeValues) => void;
  setTakerAddress: (address: string | undefined) => void;
  setDurationLength: (durationLength: number) => void;
  setDurationUnits: (durationUnits: DurationUnits) => void;
  setExpiry: (numberInput: number, units: DurationUnits) => void;
  setRate: (rate: number) => void;
  setFee: (fee: string) => void;
  // Modal handlers
  openTokenSelectorModal: (tokenType: 'fromToken' | 'toToken') => void;
  closeTokenSelectorModal: () => void;
};

export const useSwapStore = create<SwapStore>((set) => ({
  // initial state
  fromToken: undefined,
  toToken: undefined,
  fromAmount: 0,
  toAmount: 0,
  takerType: 'anyone',
  takerAddress: undefined,
  durationLength: 1,
  durationUnits: 'HOURS',
  expiry: Math.floor(Date.now() / 1000),
  rate: 0,
  fee: '1',

  isTokenSelectorModalOpen: false,
  modalTokenType: null,

  setFromToken: (token: string | undefined) => set({ fromToken: token }),
  setToToken: (token: string | undefined) => set({ toToken: token }),
  setFromAmount: (amount: number | undefined) => set({ fromAmount: amount }),
  setToAmount: (amount: number | undefined) => set({ toAmount: amount }),
  setTakerType: (value: TakerTypeValues) => set({ takerType: value }),
  setTakerAddress: (address: string | undefined) =>
    set({ takerAddress: address }),
  setDurationLength: (durationLength: number) => set({ durationLength }),
  setDurationUnits: (durationUnits: DurationUnits) => set({ durationUnits }),

  setExpiry: (numberInput: number, units: DurationUnits) =>
    set(() => ({
      expiry: convertToUnixTimestamp({ numberInput, units }),
    })),

  setRate: (rate: number) => set({ rate }),
  setFee: (fee: string) => set({ fee }),

  // Modal handlers
  openTokenSelectorModal: (tokenType: 'fromToken' | 'toToken') =>
    set({ isTokenSelectorModalOpen: true, modalTokenType: tokenType }),
  closeTokenSelectorModal: () =>
    set({ isTokenSelectorModalOpen: false, modalTokenType: null }),
}));
