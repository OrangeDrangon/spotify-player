import { ISpotifyError } from "interfaces/ISpotifyError.interface";

export async function getUrl<T>(
  url: string,
  token: string
): Promise<T | ISpotifyError | null> {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: [["Authorization", `Bearer ${token}`]]
    });
    const json = await response.json();
    return response.status === 200
      ? (json as T)
      : (json as ISpotifyError);
  } catch (error) {
    console.log(error);
  }
  return null;
}
