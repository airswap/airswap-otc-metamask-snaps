import { useEffect, useRef } from 'react';

import { TextInput } from '../../components';
import {
  StyledDialog,
  ModalHeader,
  TokenList,
  TokenItem,
  EditCustomTokensButton,
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

  const handleCloseModal = () => {
    onClose();
    modalRef.current?.close();
  };

  return (
    <StyledDialog ref={modalRef}>
      <ModalHeader>
        <h3>Select Token</h3>
        {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
        <button onClick={handleCloseModal}>&times;</button>
      </ModalHeader>
      <TextInput
        placeholder="Search name or paste address"
        onTextChange={() => null}
      />
      <TokenList>
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
      <EditCustomTokensButton>Edit Custom Tokens</EditCustomTokensButton>
    </StyledDialog>
  );
};
