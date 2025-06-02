import {
  memo,
  useMemo,
  type FC,
} from "react";
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  type ImageSourcePropType,
} from "react-native";

import TextComponent from "../ui/TextComponent";
import BaseButtonUI from "../ui/BaseButtonUI";

import { main } from "@/constants/Colors"; 

import { type MainColorsType } from "@/constants";

type ButtonNavigationProps = {
  icon: ImageSourcePropType;
  text?: string;
  onPress: () => void;
}

const ButtonNavigation: FC<ButtonNavigationProps> = ({
  icon,
  text,
  onPress,
}) => {
  const { width, height } = useWindowDimensions();

  const styles = useMemo(
    () => fnGetStyles(width, height, main),
    [width, height]
  );

  return (
    <BaseButtonUI onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={icon}
          style={styles.image}
          resizeMode="contain"
        />
        <TextComponent
          text={text ?? ""}
          color={main.text}
          variant="NS_SB"
          variantSize="B"
        />
      </View>
    </BaseButtonUI>
  );
}

const fnGetStyles = (
  width: number,
  height: number,
  colors: MainColorsType,
) => 
  StyleSheet.create({
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      borderWidth: 4,
      borderColor: colors.border,
      borderRadius: 10,
      padding: 20,
      minWidth: 165,
      width: width / 100 * 42.63,
      height: height / 100 * 23.47,
      backgroundColor: colors.buttonBackground,
    },
    image: {
      width: height / 100 * 20.3,
      height: height / 100 * 12.27,
      flex: 0.9,
    }
  })

export default memo(ButtonNavigation);