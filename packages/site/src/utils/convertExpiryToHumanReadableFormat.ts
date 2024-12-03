export const convertExpiryToHumanReadableFormat = (
  expiry: number,
): string | undefined => {
  const currentTimestamp = Math.floor(Date.now() / 1000);
  const remainingTimeInSeconds = expiry - currentTimestamp;

  if (remainingTimeInSeconds <= 0) {
    return undefined;
  }

  const minutes = Math.floor(remainingTimeInSeconds / 60) % 60;
  const hours = Math.floor(remainingTimeInSeconds / (60 * 60)) % 24;
  const days = Math.floor(remainingTimeInSeconds / (60 * 60 * 24));

  if (remainingTimeInSeconds < 60 * 60) {
    return `${minutes} Min`;
  }
  if (remainingTimeInSeconds < 60 * 60 * 24) {
    return `${hours} Hour${hours === 1 ? '' : 's'}${
      minutes > 0 ? ` ${minutes} Min${minutes === 1 ? '' : 's'}` : ''
    }`;
  }
  return `${days} Day${days === 1 ? '' : 's'}${
    hours > 0 ? ` ${hours} Hour${hours === 1 ? '' : 's'}` : ''
  }`;
};
