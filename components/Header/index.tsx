import {
  memo,
  useCallback,
  useMemo,
  type FC,
} from "react"
import { View, Image, StyleSheet, useWindowDimensions, ColorValue } from "react-native";

import BaseButtonUI from "../ui/BaseButtonUI"

import Icon from "../../assets/images/buttonsIcons/Vector 147.png"
import { useRouter } from "expo-router";

type Props = {
  cHeight?: number;
  onBack?: () => void;
  bgColor?: ColorValue;
}

const Header: FC<Props> = ({
  cHeight,
  onBack,
  bgColor = "#F3F7F8",
}) => {
  const routs = useRouter();
  const { height } = useWindowDimensions();

  const styles = useMemo(() => createStyles(height, bgColor, cHeight), [cHeight, height, bgColor]);

  const onClickBack = useCallback(() => {
    if (onBack) return onBack();
    return routs.back();
  }, [onBack, routs])

  return (
    <View style={styles.container}>
      <BaseButtonUI onPress={onClickBack} style={{ backgroundColor: bgColor }}>
        <Image
          source={Icon}
          style={{ width: 36 }}
          resizeMode="contain"
        />
      </BaseButtonUI>
    </View>
  )
}


const createStyles = (
  height: number,
  bgColor: ColorValue,
  cHeight?: number,
) =>
  StyleSheet.create({
    container: {
      height: cHeight ?? (height / 100 * 14.1),
      flexDirection: "row",
      marginHorizontal: 16,
      backgroundColor: bgColor,
    },
  })

export default memo(Header)