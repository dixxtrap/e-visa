export const excludeFields = <T, Key extends keyof T>(
  obj: T,
  keys: Key[],
): Omit<T, Key> => {
  const result = { ...obj };
  keys.forEach((key) => {
    delete result[key];
  });
  return result;
};

export const pickFields = <T extends Object, Key extends keyof T>(
  obj: T,
  keys: Key[],
): Pick<T, Key> => {
  const result = {} as Pick<T, Key>;
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
};
