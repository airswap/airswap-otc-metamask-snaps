import { useEffect, useRef } from 'react';

import { TextInput } from '../../components';
import { useSwapStore } from '../../stores';
import {
  StyledDialog,
  ModalHeader,
  TokenList,
  TokenItem,
  EditCustomTokensButton,
  InputContainer,
  CloseButton,
  SelectTokenHeader,
  OutlineDiv,
} from './TokenSelectorModalStyles';

type TokenSelectorModalProps = {
  onClose: () => void;
  onTokenSelect: (token: string) => void;
};

export const TokenSelectorModal: React.FC<TokenSelectorModalProps> = ({
  onClose,
  onTokenSelect,
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const { modalTokenType, setFromToken, setToToken } = useSwapStore();

  useEffect(() => {
    const dialog = modalRef.current;

    if (dialog && !dialog.hasAttribute('open')) {
      dialog.showModal();
    }

    // eslint-disable-next-line id-length
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        dialog?.close();
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  const tokens = ['ETH', 'DAI', 'USDT', 'WBTC']; // Example token list

  const handleCloseModal = () => {
    onClose();
    modalRef.current?.close();
  };

  const handleTextInputChange = (value: string) => {
    if (modalTokenType === 'fromToken') {
      setFromToken(value);
    } else if (modalTokenType === 'toToken') {
      setToToken(value);
    }
  };

  return (
    <StyledDialog ref={modalRef}>
      <CloseButton onClick={handleCloseModal}>X</CloseButton>
      <ModalHeader>
        <SelectTokenHeader>Select Token</SelectTokenHeader>
      </ModalHeader>
      <InputContainer>
        <TextInput
          placeholder="Search name or paste address"
          onTextChange={() => handleTextInputChange}
        />
      </InputContainer>
      <TokenList>
        {/* FIXME: replace the token loop below with tokens found in user's web3 wallet */}
        <span>Token</span>
        {tokens.map((token) => (
          <TokenItem
            key={token}
            onClick={() => {
              onTokenSelect(token);
              modalRef.current?.close();
            }}
          >
            {token}
          </TokenItem>
        ))}
      </TokenList>
      <OutlineDiv>Expanded results from inactive Token Lists</OutlineDiv>
      <EditCustomTokensButton>Edit Custom Tokens</EditCustomTokensButton>
    </StyledDialog>
  );
};
