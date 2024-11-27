import type { FullOrderERC20 } from '@airswap/utils';
import type { AppError } from 'src/types/AppError';
import { create } from 'zustand';

// Define the state shape
export type MakeOtcState = {
  lastUserOrder: FullOrderERC20 | null; // Use null explicitly to avoid exactOptionalPropertyTypes issues
  status: 'idle' | 'signing' | 'failed' | 'reset';
  error: AppError | null; // Use null explicitly
};

// Define the store's actions
export type MakeOtcActions = {
  setStatus: (newStatus: MakeOtcState['status']) => void;
  setUserOrder: (order: FullOrderERC20) => void;
  clearLastUserOrder: () => void;
  setError: (error: AppError | null) => void;
  reset: () => void;
};

// Combine the state and actions
export type MakeOtcStore = MakeOtcState & MakeOtcActions;

// Zustand store implementation
export const useMakeOtcStore = create<MakeOtcStore>((set) => ({
  // Initial state
  lastUserOrder: null,
  status: 'idle',
  error: null,

  // Actions
  setStatus: (newStatus) =>
    set(() => ({
      status: newStatus,
    })),

  setUserOrder: (order) =>
    set(() => ({
      lastUserOrder: order,
    })),

  clearLastUserOrder: () =>
    set(() => ({
      lastUserOrder: null, // Reset to null
    })),

  setError: (error) =>
    set(() => ({
      error,
    })),

  reset: () =>
    set(() => ({
      lastUserOrder: null,
      status: 'idle',
      error: null,
    })),
}));
