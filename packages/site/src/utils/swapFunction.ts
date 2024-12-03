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

/**
 * Executes a swap transaction using the AirSwap library.
 *
 * @param params - The parameters required to perform the swap.
 * @param params.nonce - Unique identifier for the swap transaction.
 * @param params.expiry - Expiry timestamp for the swap.
 * @param params.signerWallet - Address of the signer’s wallet.
 * @param params.signerToken - Address of the token being swapped by the signer.
 * @param params.signerAmount - Amount of the token being swapped by the signer.
 * @param params.senderToken - Address of the token being swapped by the sender.
 * @param params.senderAmount - Amount of the token being swapped by the sender.
 * @param params.signature - Signature authorizing the swap.
 * @returns A promise that resolves to the transaction response.
 */
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
    const chainId = Number(provider.chainId);

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
