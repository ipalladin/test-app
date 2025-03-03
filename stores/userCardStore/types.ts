import type { User } from "../usersStore";

export type UserCard = {
  user: Partial<User & UserCardAddParam>;
  setUser: (user: User) => void;
  toggleUserIsFavourite: () => void;
};

type UserCardAddParam = {
  isFavorite: boolean;
};
