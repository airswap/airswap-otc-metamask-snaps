import { SwapERC20 } from '@airswap/libraries';

export const getSwapErc20Address = (chainId: number): string | undefined => {
  return SwapERC20.getAddress(chainId) ?? undefined;
};
