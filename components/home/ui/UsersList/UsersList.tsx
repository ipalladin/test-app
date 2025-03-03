import * as React from "react";
import {
  interpolate,
  Extrapolation,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

import { User } from "@/stores";
import * as Styled from "./style";
import { useUserListInit } from "./utils";

import type { ListRenderItem } from "react-native";

const UsersList: React.FC = () => {
  const { init, usersList, isLoading, setFilter } = useUserListInit();

  const scrollOffset = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollOffset.value = event.contentOffset.y;
  });

  const animatedStyles = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollOffset.value,
      [0, 200],
      [0, -200],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ translateY }],
    };
  });

  const animatedTopStyles = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollOffset.value,
      [0, 80],
      [0, -50],
      Extrapolation.CLAMP
    );

    return {
      transform: [{ translateY }],
    };
  });

  React.useEffect(() => {
    init();
    setFilter("");
  }, []);

  const keyExtractor = React.useCallback((item: User) => {
    return `Item_key_${item.id}`;
  }, []);

  const renderItem: ListRenderItem<User> = React.useCallback(({ item }) => {
    return (
      <Styled.UserCardContaner>
        <Styled.RoterLink href={`/UserScreen/${JSON.stringify(item)}`}>
          <Styled.UserCardWrapper>
            <Styled.ParagraphRow>
              <Styled.Paragraph>Name: </Styled.Paragraph>
              <Styled.ItemText>{item.name}</Styled.ItemText>
            </Styled.ParagraphRow>
            <Styled.ParagraphRow>
              <Styled.Paragraph>Email: </Styled.Paragraph>
              <Styled.ItemText>{item.email}</Styled.ItemText>
            </Styled.ParagraphRow>
            <Styled.ParagraphRow>
              <Styled.Paragraph>City: </Styled.Paragraph>
              <Styled.ItemText>{item.address.city}</Styled.ItemText>
            </Styled.ParagraphRow>
          </Styled.UserCardWrapper>
        </Styled.RoterLink>
      </Styled.UserCardContaner>
    );
  }, []);

  const onChangeText = (text: string) => {
    setFilter(text);
  };

  if (isLoading)
    return (
      <Styled.Container>
        <Styled.Loader />
      </Styled.Container>
    );

  return (
    <Styled.Container>
      <Styled.SearchBarContainer style={animatedStyles}>
        <Styled.SearchBar onChangeText={onChangeText} />
      </Styled.SearchBarContainer>
      <Styled.AnimatedListContainer style={animatedTopStyles}>
        <Styled.UserScrollableList
          data={usersList}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
        />
      </Styled.AnimatedListContainer>
    </Styled.Container>
  );
};

export default UsersList;
