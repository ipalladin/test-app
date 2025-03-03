import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import styled from "styled-components/native";
import { Link } from "expo-router";
import { MARGIN, styledMargin } from "@/styles";

import type { User } from "@/stores";
import type { FlatListProps } from "react-native";
import Animated from "react-native-reanimated";

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const AnimatedListContainer = styled(Animated.View)``;

export const UserScrollableList = styled(Animated.FlatList<User>).attrs<
  FlatListProps<User>,
  FlatListProps<User>
>({
  contentContainerStyle: {
    padding: MARGIN.m,
    gap: MARGIN.xl,
  },
})``;

export const UserCardContaner = styled(View)`
  padding: ${styledMargin(MARGIN.m)};
  background: #fff;
  border-radius: ${styledMargin(MARGIN.m)};
`;

export const UserCardWrapper = styled(View)`
  width: 100%;
  gap: ${styledMargin(MARGIN.m)};
`;

export const RoterLink = styled(Link)`
  gap: ${styledMargin(MARGIN.m)};
  flex-grow: 1;
`;

export const ParagraphRow = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const Paragraph = styled(Text)`
  font-weight: 700;
`;

export const ItemText = styled(Text)``;

export const Loader = styled(ActivityIndicator)`
  flex: 1;
  align-self: center;
`;

export const SearchBarContainer = styled(Animated.View)`
  align-items: center;
  height: 50px;
  padding: ${styledMargin(MARGIN.m)};
`;

export const SearchBar = styled(TextInput)`
  width: 100%;
  height: 100%;
  color: #000;
  font-size: 18px;
  background-color: #fff;
  border-radius: ${styledMargin(MARGIN.m)};
  padding: ${styledMargin(MARGIN.m)};
  border-color: grey;
  border-width: 1px;
`;
