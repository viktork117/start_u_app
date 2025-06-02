import React, { memo, useMemo, type FC } from "react";
import {
  ColorValue,
  Image,
  StyleProp,
  StyleSheet,
  useWindowDimensions,
  View,
  ViewStyle,
} from "react-native";
import BaseButtonUI from "../ui/BaseButtonUI";
import TextComponent from "../ui/TextComponent";

type MenuContainerProps = {
  image?: any;
  textMain: string;
  textSecond: string;
  textThird: string;
  textButton?: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

const MenuCard: FC<MenuContainerProps> = ({
  image,
  textMain,
  textSecond,
  textThird,
  textButton = "Начать",
  onPress,
  style,
}) => {
  const { height, width } = useWindowDimensions();
  const styles = useMemo(() => fnStyles("#F3F7F8", height, width), [height, width]);

  return (
    <View style={[styles.container, style]}>
      <View style={styles.containerChild}>
        <Image source={image} resizeMode="contain" style={styles.image} />
        <TextComponent text={textMain} color={"#000000"} variant="SO" align="center" />
        <TextComponent text={textSecond} color={"#000000"} variant="NS_L" variantSize="S" weight={300} />
        <View style={{ display: "flex", alignSelf: "flex-start" }}>
          <TextComponent text={textThird} color={"#000000"} variant="NS_R" variantSize="S" weight={700} align="left" />
        </View>
        <View style={{ position: "absolute", bottom: -50, right: 10 }}>
          <BaseButtonUI
            onPress={onPress} 
            style={{
              width: 150,
              height: 56,
              borderRadius: 10,
              backgroundColor: "#ED9344",
            }}>
            <TextComponent text={textButton} color={"#ffffff"} variantSize="L" />
          </BaseButtonUI>
        </View>
      </View>
    </View>
  );
}

const fnStyles = (
  color: ColorValue,
  height: number,
  width: number,
) => StyleSheet.create({
  container: {
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    backgroundColor: color,
    width: "100%",
    // height: height / 100 * 40,
    borderRadius: 10,
    padding: 20,
    marginBottom: 78,

  },
  containerChild: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    rowGap: 10,
    marginTop: 30,
  },
  image: {
    width: width / 100 * 51.78,
    height: height / 100 * 22.3,
  }
})

export default memo(MenuCard);
