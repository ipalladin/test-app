import { create } from "zustand";

import type { UsersListStore } from "./types";

export const useUsersStore = create<UsersListStore>()((set) => ({
  usersList: [],
  isLoading: false,
  filter: "",
  setFilter: (filter) => {
    //TODO SOME DEBOUNCE
    return set(() => ({
      filter,
    }));
  },
  setUsersList: (newUsersList) => {
    return set(() => {
      return {
        usersList: newUsersList,
      };
    });
  },
  setIsLoading: (value) =>
    set(() => ({
      isLoading: value,
    })),
}));
