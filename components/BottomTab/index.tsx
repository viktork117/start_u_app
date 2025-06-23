import { useNavigation, useRouter } from "expo-router";
import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  type FC
} from "react";
import {
  Image,
  StyleSheet,
  type ColorValue,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import ButtonBase from "../ui/ButtonBase";

import { main } from "@/constants/Colors";

import logo from "../../assets/images/icons/Vector109.png";

type Props = {
  backgroundColor?: ColorValue,
  absolute?: boolean,
  isMain?: boolean,
}

const BottomTab: FC<Props> = ({
  backgroundColor,
  absolute,
  isMain
}) => {
  const { buttonBottomTabBackground } = main;

  const routes = useRouter();
  const { bottom } = useSafeAreaInsets();

  const styles = useMemo(
    () => fnGetStyles(buttonBottomTabBackground, absolute, bottom),
    [buttonBottomTabBackground, absolute, bottom]
  );

  const fnBackMain = useCallback(
    () => {
      if (isMain) return;
      routes.push("/");
    },
    [isMain, routes]
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