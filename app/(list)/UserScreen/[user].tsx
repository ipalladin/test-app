import * as React from "react";

import { UserCard } from "@/components/home";
import { useNavigation, useRoute } from "@react-navigation/native";

import type { User } from "@/stores";
import type { RouteProp, UserCardScreenParams } from "@/types";

const UserScreen: React.FC = () => {
  const route = useRoute<RouteProp<UserCardScreenParams>>();
  const navigation = useNavigation();

  const user = JSON.parse(String(route.params?.user)) as User;

  React.useEffect(() => {
    navigation.setOptions({
      title: `${user.name}`,
    });
  }, [user]);

  return <UserCard />;
};

export default React.memo(UserScreen);
