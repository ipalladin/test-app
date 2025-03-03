import type { NativeStackNavigationOptions } from "@react-navigation/native-stack";

const useStackStyle = (): NativeStackNavigationOptions => {
  return {
    headerShadowVisible: false,
  };
};

export default useStackStyle;
