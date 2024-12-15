import { Swap } from '@airswap/libraries';
import { splitSignature } from '@ethersproject/bytes';
import type { ExternalProvider } from '@ethersproject/providers';
import { Web3Provider } from '@ethersproject/providers';
import type { ethers, BigNumberish } from 'ethers';
import { useMetaMaskContext } from 'src/hooks';

type SwapParams = {
  nonce: BigNumberish;
  expiry: BigNumberish;
  signerWallet: string;
  signerToken: string;
  signerAmount: BigNumberish;
  senderToken: string;
  senderAmount: BigNumberish;
  signature: string;
};

export const executeSwap = async ({
  nonce,
  expiry,
  signerWallet,
  signerToken,
  signerAmount,
  senderToken,
  senderAmount,
  signature,
}: SwapParams): Promise<ethers.ContractTransaction> => {
  try {
    const { provider } = useMetaMaskContext();

    if (!provider) {
      throw new Error('MetaMask provider is not connected.');
    }

    const web3Provider = new Web3Provider(
      provider as unknown as ExternalProvider,
    );
    const { chainId } = await web3Provider.getNetwork();

    const signer = web3Provider.getSigner();
    const swapContract = Swap.getContract(web3Provider, chainId);

    // Use the splitSignature function correctly
    const { v, r, s } = splitSignature(signature);

    const tx = await swapContract.swap({
      nonce,
      expiry,
      signerWallet,
      signerToken,
      signerAmount,
      senderToken,
      senderAmount,
      v,
      r,
      s,
      signer,
    });

    await tx.wait();
    console.log('Swap executed:', tx);
    return tx;
  } catch (error) {
    console.error('Swap execution error:', error);
    throw error;
  }
};
