import { useRoute } from "@react-navigation/native";
import * as React from "react";
import { View, Text } from "react-native";

import { useRouteParams } from "./utils";
import * as Styled from "./style";
import { useUserCardStore } from "@/stores";

const UserCard: React.FC = () => {
  const userFromRoute = useRouteParams();
  const setUser = useUserCardStore((store) => store.setUser);
  const toggleUserIsFavourite = useUserCardStore(
    (store) => store.toggleUserIsFavourite
  );
  const user = useUserCardStore((store) => store.user);

  React.useEffect(() => {
    setUser(userFromRoute);
  }, []);

  return (
    <Styled.SafeAreaContainer>
      <Styled.Wrapper>
        <Styled.CardContainer>
          <Styled.CardInfoContainer>
            <Styled.HeaderContainer>
              <Styled.HeaderCardName>{`${user.name}`}</Styled.HeaderCardName>
            </Styled.HeaderContainer>
            <Styled.CardInfoText>{`${user.email}`}</Styled.CardInfoText>
            <Styled.CardInfoText>{`${user.phone}`}</Styled.CardInfoText>
          </Styled.CardInfoContainer>
          <Styled.StarContainer>
            <Styled.StarIcon
              selected={user.isFavorite}
              onPress={() => {
                console.log("HUI");
                toggleUserIsFavourite();
              }}
            />
          </Styled.StarContainer>
        </Styled.CardContainer>
      </Styled.Wrapper>
    </Styled.SafeAreaContainer>
  );
};

export default UserCard;
