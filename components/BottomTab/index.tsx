import {
  memo,
  useCallback,
  useMemo,
  type FC
} from "react";
import {
  Image,
  StyleSheet,
  type ColorValue,
} from "react-native";
import { useRouter } from "expo-router";

import ButtonBase from "../ui/ButtonBase";

import { main } from "@/constants/Colors";

import logo from "../../assets/images/icons/Vector109.png";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  backgroundColor?: ColorValue,
  absolute?: boolean,
}

const BottomTab: FC<Props> = ({
  backgroundColor,
  absolute,
}) => {
  const { buttonBottomTabBackground } = main;

  const routes = useRouter();
  const { bottom } = useSafeAreaInsets();

  console.log(bottom)

  const styles = useMemo(
    () => fnGetStyles(buttonBottomTabBackground, absolute, bottom),
    [buttonBottomTabBackground, absolute, bottom]
  );

  const fnBackMain = useCallback(
    () => {
      routes.push("/");
    },
    [routes]
  );

  return (
    <ButtonBase onPress={fnBackMain} style={styles.container}>
      <Image source={logo} style={{ width: 44, height: 29 }} resizeMode="contain" />
    </ButtonBase>
  );
}

const fnGetStyles = (
  buttonBottomTabBackground: ColorValue,
  absolute: boolean | undefined,
  bottomSizePadding: number,
) => 
  StyleSheet.create({
    container: {
      height: 92,
      width: "100%",
      backgroundColor: buttonBottomTabBackground,
      borderTopLeftRadius: 50,
      borderTopRightRadius: 50,
      position: absolute ? "absolute" : "static",
      bottom: absolute ? bottomSizePadding : 0,
    }
  })

export default memo(BottomTab);