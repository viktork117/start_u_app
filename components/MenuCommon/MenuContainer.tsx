import {
  memo,
  useMemo,
  type FC,
  type ReactNode,
} from "react";
import { ColorValue, StyleSheet, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import BottomTab from "../BottomTab";

import { menu } from "@/constants/Colors";

type MenuContainerProps = {
  children: ReactNode | ReactNode[];
  backgroundColor?: ColorValue,
  absolute?: boolean, 
}

const MenuContainer: FC<MenuContainerProps> = ({
  children,
  backgroundColor,
  absolute,
}) => {
  const { height } = useWindowDimensions();

  const styles = useMemo(
    () => createStyles(backgroundColor ?? menu.background, height),
    [backgroundColor, height]
  );

  return (
    <>
      <SafeAreaView style={styles.menuContainer}>
        {children}
        <BottomTab absolute={absolute} />
      </SafeAreaView>
    </>
  )
}

const createStyles = (
  colors: any,
  height: number
) => StyleSheet.create({
  menuContainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: colors,
  }
})

export default memo(MenuContainer);
