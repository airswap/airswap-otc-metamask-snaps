import { IoMdOpen } from 'react-icons/io';

import { SwapButton } from '../../components';
// import { compressFullOrderURL } from '../../utils/compressFullOrderERC20';
import { useSwapStore } from '../../stores';
import { convertExpiryToHumanReadableFormat } from '../../utils/convertExpiryToHumanReadableFormat';
import {
  ActionButtonsBox,
  FromToTokenBox,
  HorizontalBox,
  HorizontalDiv,
  SignedOrderScreenContainer,
  SpecifiedTakerAndExpiryBox,
  StyledH3,
  TokenImageContainer,
  VerbSpan,
  VerticalBox,
} from './SignedOrderScreenStyles';

export const SignedOrderScreen = () => {
  const { fromToken, fromAmount, toToken, toAmount, takerAddress, expiry } =
    useSwapStore();

  // const handleCopyLink = async () => {
  //   // FIXME: Replace `undefined` with actual values
  //   const compressedURL = compressFullOrderURL(undefined);
  //   if (compressedURL) {
  //     try {
  //       await navigator.clipboard.writeText(compressedURL);
  //       console.log('Link copied to clipboard!');
  //     } catch (error) {
  //       console.error('Failed to copy link to clipboard:', error);
  //     }
  //   } else {
  //     console.error('Compressed URL is undefined or invalid');
  //   }
  // };

  const expirationDate = convertExpiryToHumanReadableFormat(expiry);

  return (
    <SignedOrderScreenContainer>
      <StyledH3>Order</StyledH3>
      <FromToTokenBox>
        <HorizontalDiv>
          {/* FIXME: button opens etherscan link for contract address. Also fix icon */}
          <IoMdOpen
            size={16}
            style={{
              border: 'solid #798bad 0.5px',
              borderRadius: '50%',
              padding: '0.5rem',
              color: '#798bad',
            }}
            onClick={() => null}
          />
          <VerticalBox>
            <VerbSpan>From</VerbSpan>
            <span>{fromToken}</span>
          </VerticalBox>
        </HorizontalDiv>
        <HorizontalBox>
          {fromAmount?.toString() ?? 0}
          <TokenImageContainer>
            {/* FIXME: replace with correct path to token image */}
            <img src="" alt="" />
          </TokenImageContainer>
        </HorizontalBox>
      </FromToTokenBox>
      <FromToTokenBox>
        <HorizontalDiv>
          {/* FIXME: button opens etherscan link for contract address. Also fix icon */}
          <IoMdOpen
            size={16}
            style={{
              border: 'solid #798bad 0.5px',
              borderRadius: '50%',
              padding: '0.5rem',
              color: '#798bad',
            }}
            onClick={() => null}
          />
          <VerticalBox>
            <VerbSpan>To</VerbSpan>
            <span>{toToken}</span>
          </VerticalBox>
        </HorizontalDiv>
        <HorizontalBox>
          {toAmount?.toString() ?? 0}
          <TokenImageContainer>
            {/* FIXME: replace with correct path to token image */}
            <img src="" alt="" />
          </TokenImageContainer>
        </HorizontalBox>
      </FromToTokenBox>
      <SpecifiedTakerAndExpiryBox>
        <HorizontalBox>
          <VerbSpan>For: {takerAddress ?? 'Anyone'}</VerbSpan>
        </HorizontalBox>
        <HorizontalBox>
          {expirationDate ? (
            <>
              <VerbSpan>Expires in </VerbSpan>&nbsp; {expirationDate}
            </>
          ) : (
            <VerbSpan>Expired</VerbSpan>
          )}
        </HorizontalBox>
      </SpecifiedTakerAndExpiryBox>
      <HorizontalBox>
        <VerbSpan>
          {/* FIXME: remove placeholders and add conversioin rate */}1{' '}
          {fromToken} = 333.333{toToken}
        </VerbSpan>
      </HorizontalBox>
      <ActionButtonsBox>
        {/* FIXME: add cb function */}
        <SwapButton label="Cancel Order" onClick={() => null} />
        {/* FIXME: cb function should accept handleCopyLink. Need to troubleshoot handleCopyLink */}
        <SwapButton label="Copy Link" onClick={() => null} />
      </ActionButtonsBox>
    </SignedOrderScreenContainer>
  );
};
