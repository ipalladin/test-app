export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export type UsersListStore = {
  usersList: User[];
  isLoading: boolean;
  filter: string;
  setFilter: (text: string) => void;
  setUsersList: (list: User[]) => void;
  setIsLoading: (value: boolean) => void;
};

export type getUserListFromApiParams = Pick<UsersListStore, "setIsLoading">;
