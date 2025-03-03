import * as React from "react";
import { Stack } from "expo-router";

import useStackStyle from "@/hooks/useStackStyle";

const ListLayout: React.FC = () => {
  const stackStyles = useStackStyle();

  return (
    <Stack screenOptions={stackStyles} initialRouteName="index">
      <Stack.Screen name="index" options={{ title: "User List" }} />
      <Stack.Screen name="UserScreen/[user]" />
    </Stack>
  );
};

export default ListLayout;
