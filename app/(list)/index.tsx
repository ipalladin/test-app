import * as React from "react";

import { UsersList } from "@/components/home";

const UserListScreen: React.FC = () => {
  return <UsersList />;
};

export default React.memo(UserListScreen);
