import type { DurationUnits } from 'src/stores';

type ConvertToUnixTimestampProps = {
  numberInput: number;
  units: DurationUnits;
};

export const convertToUnixTimestamp = ({
  numberInput = 0,
  units,
}: ConvertToUnixTimestampProps) => {
  const currentTimestamp = Math.floor(Date.now() / 1000);
  let durationInSeconds: number;

  switch (units) {
    case 'MINUTES':
      durationInSeconds = numberInput * 60;
      break;
    case 'HOURS':
      durationInSeconds = numberInput * 60 * 60;
      break;
    case 'DAYS':
      durationInSeconds = numberInput * 24 * 60 * 60;
      break;
    case 'WEEKS':
      durationInSeconds = numberInput * 7 * 24 * 60 * 60;
      break;
    default:
      return currentTimestamp;
  }

  return currentTimestamp + durationInSeconds;
};
