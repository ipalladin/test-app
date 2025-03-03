import { SafeAreaView, ScrollView, Text, View } from "react-native";
import styled from "styled-components/native";

import { BORDER_RADIUS, MARGIN, styledMargin } from "@/styles";
import { Ionicons } from "@expo/vector-icons";
import { IconProps } from "@expo/vector-icons/build/createIconSet";

export const SafeAreaContainer = styled(SafeAreaView)`
  flex: 1;
`;

export const Wrapper = styled(ScrollView)`
  padding: ${styledMargin(MARGIN.m)};
`;

export const CardInfoContainer = styled(View)`
  flex: 1;
`;

export const CardContainer = styled(View)`
  flex-direction: row;
  background-color: #f58110;
  padding-horizontal: ${styledMargin(MARGIN.xxl)};
  padding-vertical: ${styledMargin(MARGIN.xl)};
  border-radius: ${styledMargin(BORDER_RADIUS.s)};
  gap: ${styledMargin(BORDER_RADIUS.l)};
`;

export const HeaderCardName = styled(Text)`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
`;

export const HeaderContainer = styled(View)`
  margin-bottom: ${styledMargin(BORDER_RADIUS.l)};
`;

export const CardInfoText = styled(HeaderCardName)`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
`;

export const StarContainer = styled(View)`
  flex-schrink: 1;
`;

type StarIconProps = {
  selected: boolean;
};

export const StarIcon = styled(Ionicons).attrs<
  IconProps<string>,
  IconProps<string>
>(({ selected }: StarIconProps) => ({
  name: `star${selected ? "" : "-outline"}`,
  size: 30,
  color: selected ? "red" : "#FFF",
  suppressHighlighting: true,
}))``;
