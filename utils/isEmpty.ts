const isEmpty = <T extends Record<string, any>>(obj: T): boolean =>
  Object.keys(obj).length === 0;

export default isEmpty;
