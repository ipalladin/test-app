import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { UserCard } from "./types";

export const useUserCardStore = create<UserCard>()((set) => ({
  user: {},
  setUser: (user: UserCard["user"]) => {
    const userSaved: UserCard["user"] = JSON.parse(
      localStorage.getItem(`USER-${user.id}`) || ""
    );

    return set((store) => {
      return { user: { ...user, isFavorite: userSaved?.isFavorite || false } };
    });
  },
  toggleUserIsFavourite: () => {
    return set((store) => {
      const updatedUser = { ...store.user, isFavorite: !store.user.isFavorite };

      localStorage.setItem(
        `USER-${store.user.id}`,
        JSON.stringify(updatedUser)
      );
      return { user: updatedUser };
    });
  },
}));
