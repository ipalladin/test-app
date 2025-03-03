import type { User } from "@/stores";
import type {
  ParamListBase,
  RouteProp as RNRouteProp,
} from "@react-navigation/native";

export type RouteProp<
  T extends ParamListBase,
  K extends keyof T = keyof T
> = RNRouteProp<T, K>;

export type UserCardScreenParams = {
  UserScreen: Record<"user", User>;
};
