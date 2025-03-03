import { getUserListFromApi, useUsersStore } from "@/stores";

export const useUserListInit = () => {
  const filter = useUsersStore((state) => state.filter);
  const isLoading = useUsersStore((state) => state.isLoading);
  const usersList = useUsersStore((state) => state.usersList);
  const setFilter = useUsersStore((state) => state.setFilter);
  const setUsersList = useUsersStore((state) => state.setUsersList);
  const setIsLoading = useUsersStore((state) => state.setIsLoading);

  const init = async () => {
    const response = await getUserListFromApi(setIsLoading);
    setUsersList(response);
  };

  const finalList = filter
    ? usersList.filter(
        (user) =>
          user.name.includes(filter) ||
          user.email.includes(filter) ||
          user.email.includes(filter)
      )
    : usersList;

  return { init, usersList: finalList, isLoading, setFilter };
};
