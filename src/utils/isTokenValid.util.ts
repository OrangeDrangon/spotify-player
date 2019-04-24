import { getTokenExpiresAt } from "./getTokenExpiresAt.util";

export const isTokenValid = (): boolean => {
  const expiresAt = getTokenExpiresAt();
  return expiresAt && expiresAt > new Date() ? true : false;
};
