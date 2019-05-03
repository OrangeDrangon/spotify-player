export const getNextRepeatState = (current: 0 | 1 | 2): [string, 0 | 1 | 2] => {
  switch (current) {
    case 0:
      return ["context", 1];
    case 1:
      return ["track", 2];
    case 2:
      return ["off", 0];
    default:
      return ["off", 0];
  }
};
