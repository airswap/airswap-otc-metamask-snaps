type RpcError = {
  code: number;
  message: any;
  stack: string;
};

type RpcSignRejectedError = {
  reason: string;
  code: 'ACTION_REJECTED';
  action: any;
  from: string;
  messageData: any;
};

export type EthersProjectError = {
  argument: string;
  value: string;
  code: 'INVALID_ARGUMENT';
};

export type NumericFaultError = {
  code: 'NUMERIC_FAULT';
  fault: string;
  operation: string;
  reason: string;
  value?: number;
};

export enum AppErrorType {
  ArithmeticUnderflow = 'arithmetic-underflow',
  ChainDisconnected = 'chain-disconnected',
  Disconnected = 'disconnected',
  ExpiryPassed = 'expiry-passed',
  InvalidAddress = 'invalid-address',
  InvalidInput = 'invalid-input',
  InvalidRequest = 'invalid-request',
  InvalidValue = 'invalid-value',
  NonceAlreadyUsed = 'nonce-already-used',
  RejectedByUser = 'rejected-by-user',
  SenderAllowanceLow = 'senderAllowanceLow',
  SenderBalanceLow = 'senderBalanceLow',
  SignerAllowanceLow = 'signer-allowance-low',
  SignerBalanceLow = 'signer-balance-low',
  SignatureInvalid = 'signature-invalid',
  Unauthorized = 'unauthorized',
  UnknownError = 'unknown-error',
  UnpredictableGasLimit = 'unpredictable-gas-limit',
  UnsupportedMethod = 'unsupported-method',
}

export type AppError = {
  argument?: string | undefined;
  error?:
    | RpcError
    | RpcSignRejectedError
    | EthersProjectError
    | NumericFaultError
    | undefined;
  type: AppErrorType;
};
