export const setTokenExpiresAt = (seconds: number) => {
  const date = new Date(Date.now() + seconds * 1000);
  localStorage.setItem("tokenExpiresAt", JSON.stringify(date));
};
