import type { FullOrderERC20 } from '@airswap/utils';
import { compressFullOrderERC20 } from '@airswap/utils';

export const compressFullOrderURL = (order: FullOrderERC20 | undefined) => {
  if (!order) {
    return undefined;
  }

  try {
    const compressedOrder = compressFullOrderERC20(order);
    return compressedOrder;
  } catch (error) {
    console.error('Failed to compress order:', error);
    return null;
  }
};
