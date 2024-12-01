import { useEffect, useRef } from 'react';

import {
  CloseButton,
  StyledDialog,
  TokenItem,
  TokenList,
} from './TokenSelectorModalStyles';

type TokenSelectorModalProps = {
  onClose: () => void; // Callback to close the modal
  onTokenSelect: (token: string) => void; // Callback when a token is selected
};

export const TokenSelectorModal: React.FC<TokenSelectorModalProps> = ({
  onClose,
  onTokenSelect,
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);

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

  return (
    <StyledDialog ref={modalRef}>
      <h3>Select a Token</h3>
      <TokenList>
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
      <CloseButton
        onClick={() => {
          onClose();
          modalRef.current?.close();
        }}
      >
        Close
      </CloseButton>
    </StyledDialog>
  );
};
