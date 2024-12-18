import { ethers } from 'ethers';

import { useSwapStore } from '../stores/SwapStore';
import { swapERC20ABI } from '../utils/abi/swapERC20ABI';
import { contractAddresses } from '../utils/contractAddresses';

const defaultAddress = '0xD82E10B9A4107939e55fCCa9B53A9ede6CF2fC46';

export const useProtocolFee = () => {
  const { setFee } = useSwapStore();

  const initializeContract = async () => {
    if (typeof window === 'undefined' || !window.ethereum) {
      console.error('MetaMask provider not found.');
      return;
    }

    try {
      const provider = new ethers.providers.Web3Provider(
        window.ethereum as unknown as ethers.providers.ExternalProvider,
      );

      const network = await provider.getNetwork();
      const { chainId } = network;

      const contractAddress =
        contractAddresses[chainId.toString()] ?? contractAddresses['1'];

      const swapContract = new ethers.Contract(
        contractAddress ?? defaultAddress,
        swapERC20ABI,
        provider,
      );

      const feeFromContract = await swapContract.protocolFee();
      const formattedFee = Number(feeFromContract) / 100;
      setFee(formattedFee.toFixed(2));
      console.log(`Protocol fee: ${formattedFee.toFixed(2)}`);
    } catch (error) {
      console.error('Error initializing contract:', error);
    }
  };

  initializeContract().catch((error) => console.error(error));
};
