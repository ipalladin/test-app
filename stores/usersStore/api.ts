import { REQUEST_LOADER_DELAY_MS } from "./constants";

import type { getUserListFromApiParams } from ".";

export const getUserListFromApi = async (
  setIsLoading: getUserListFromApiParams["setIsLoading"]
) => {
  try {
    setIsLoading(true);
    return await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
  } catch (error) {
    console.error("[getUserListFromApi error => ]", error);
  } finally {
    setTimeout(() => setIsLoading(false), REQUEST_LOADER_DELAY_MS);
  }
};
