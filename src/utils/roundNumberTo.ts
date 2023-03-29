function roundNumberTo(num: number, to: number, floorOrCeil?: 'ceil' | 'floor'): number {
  let result;
  if (!floorOrCeil) result = Math.round(num * 10 ** to) / 10 ** to;
  else {
    switch (floorOrCeil) {
      case 'ceil':
        result = Math.ceil(num * 10 ** to) / 10 ** to;
        break;
      default:
        result = Math.floor(num * 10 ** to) / 10 ** to;
        break;
    }
  }
  // eslint-disable-next-line no-compare-neg-zero
  if (result === -0) return 0;
  return result;
}

export function roundNumberToPoint5(num: number): number {
  const roundedNum = roundNumberTo(num, 1);
  const flooredNum = Math.floor(num);
  const fraction = roundedNum - flooredNum;
  if (fraction < 0.25) {
    return flooredNum;
  } if (fraction >= 0.25 && fraction < 0.75) {
    return flooredNum + 0.5;
  }
  return flooredNum + 1;
}

export default roundNumberTo;
