import { FC, memo } from "react";
import { Image, StyleSheet, View } from "react-native";

import BaseButtonUI from "../ui/BaseButtonUI";
import TextComponent from "../ui/TextComponent";

interface MenuItemButtonConstants {
  COLORS: {
    TEXT: string;
  };
  SIZES: {
    IMAGE: {
      HEIGHT: number;
      WIDTH: number;
    };
  };
}

const MENU_ITEM_BUTTON_CONSTANTS: MenuItemButtonConstants = {
  COLORS: {
    TEXT: "#2D2D2D",
  },
  SIZES: {
    IMAGE: {
      HEIGHT: 78,
      WIDTH: 100,
    },
  },
};

interface MenuItemButtonProps {
  imageSource: any;
  text: string;
  onPress: () => void;
}

const MenuItemButton: FC<MenuItemButtonProps> = ({
  imageSource,
  text,
  onPress,
}) => (
  <BaseButtonUI onPress={onPress}>
    <View style={styles.buttonContainer}>
      <Image source={imageSource} resizeMode="contain" style={styles.image} />
      <TextComponent
        text={text}
        variant="NS_SB"
        variantSize="B"
        color={MENU_ITEM_BUTTON_CONSTANTS.COLORS.TEXT}
      />
    </View>
  </BaseButtonUI>
);

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  image: {
    height: MENU_ITEM_BUTTON_CONSTANTS.SIZES.IMAGE.HEIGHT,
    width: MENU_ITEM_BUTTON_CONSTANTS.SIZES.IMAGE.WIDTH,
  },
});

export default memo(MenuItemButton);