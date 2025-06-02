import React, { memo, useMemo, useRef, type FC } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Calendar, LocaleConfig } from "react-native-calendars";

import DateDisplay from "../DateDisplay";
import BottomTab from "../BottomTab";
import BottomSheetBase from "../ui/BottomSheetBase";

import { main } from "@/constants/Colors";

import { type MainContainerProps } from "./";
import { type MainColorsType } from "@/constants";
import type BottomSheet from "@gorhom/bottom-sheet";
import Header from "../Header";

const MainContainer: FC<MainContainerProps> = ({
  safeAreaStyle,
  isDataDisplayView = true,
  isHeaderView = false,
  children,
}) => {
  const styles = useMemo(() => fnStyles(main), []);
  const sheetRef = useRef<BottomSheet>(null);

  LocaleConfig.defaultLocale = 'ru';

  return (
    <SafeAreaView style={[ styles.safeAreaDefault, safeAreaStyle ]}>
      {isHeaderView && <Header />}
      {isDataDisplayView && (
        <DateDisplay
          onTouch={() => sheetRef.current?.snapToIndex(1)}
          mgTop={isHeaderView ? 0 : undefined}
        />
      )}
      {children}
      <BottomTab absolute={isHeaderView} />
      <BottomSheetBase sheetRef={sheetRef}>
        <Calendar
          firstDay={1}
          enableSwipeMonths={true}
          showSixWeeks={true}
        />
      </BottomSheetBase>
    </SafeAreaView>
  );
}

const fnStyles = (
  colors: MainColorsType
) => StyleSheet.create({
  safeAreaDefault: {
    flex: 1,
    backgroundColor: colors.background,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  }
})

export default memo(MainContainer);
