import { useRoute } from "@react-navigation/native";

import type { User } from "@/stores";
import type { RouteProp, UserCardScreenParams } from "@/types/navigations";

export const useRouteParams = () => {
  const route = useRoute<RouteProp<UserCardScreenParams>>();

  const user = JSON.parse(String(route.params?.user)) as User;

  return user;
};
