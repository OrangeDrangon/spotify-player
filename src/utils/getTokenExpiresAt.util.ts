export const getTokenExpiresAt = (): Date | null => {
  const dateString = localStorage.getItem("tokenExpiresAt");
  if (dateString) {
    return new Date(JSON.parse(dateString));
  } else {
    return null;
  }
};
