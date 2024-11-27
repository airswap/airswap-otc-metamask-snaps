import type { AppError } from 'src/types/AppError';
import { AppErrorType } from 'src/types/AppError';

// eslint-disable-next-line id-length
export const isAppError = (x: any): x is AppError => {
  return (
    typeof x === 'object' &&
    x !== null &&
    'type' in x &&
    Object.values(AppErrorType).includes(x.type)
  );
};

/**
 * Transforms the given arguments into an `AppError` object.
 *
 * @param type - The type of the error, based on `AppErrorType`.
 * @param error - An optional underlying error (e.g., `RpcError`, `EthersProjectError`).
 * @param argument - An optional string argument providing additional context for the error.
 * @returns An `AppError` object containing the provided details.
 */
export function transformToAppError(
  type: AppErrorType,
  error?: AppError['error'],
  argument?: string,
): AppError {
  return {
    ...(argument !== undefined && { argument }),
    ...(error !== undefined && { error }),
    type,
  };
}
