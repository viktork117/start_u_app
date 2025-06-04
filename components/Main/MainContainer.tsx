import React, { memo, useMemo, useRef, type FC } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { Calendar, CalendarProps, LocaleConfig } from "react-native-calendars";
import { SafeAreaView } from "react-native-safe-area-context";

import BottomTab from "../BottomTab";
import DateDisplay from "../DateDisplay";
import Header from "../Header";
import BottomSheetBase from "../ui/BottomSheetBase";

import { main } from "@/constants/Colors";

import { type MainColorsType } from "@/constants";
import type BottomSheet from "@gorhom/bottom-sheet";
import { type MainContainerProps } from "./";

LocaleConfig.defaultLocale = 'ru';

type BottomSheetCalendarProps = {
  calendarProps: CalendarProps;
  sheetRef: React.RefObject<BottomSheet | null>;
}

const BottomSheetCalendar: FC<BottomSheetCalendarProps> =
  ({calendarProps, sheetRef}) => (
    <BottomSheetBase sheetRef={sheetRef}>
      <Calendar
          key={`${Object.keys(calendarProps).join("-")}`}
          {...calendarProps}
        />
    </BottomSheetBase>
  );

const MBottomSheetCalendar = memo(BottomSheetCalendar);

const MainContainer: FC<MainContainerProps> = ({
  safeAreaStyle,
  isDataDisplayView = true,
  isHeaderView = false,
  children,
}) => {
  const sheetRef = useRef<BottomSheet>(null);
  const styles = useMemo(() => fnStyles(main), []);

  const { height } = useWindowDimensions();
  const sizePaddingBottom = useMemo(
    () => height / 100 * 10,
    [height]
  );
  
  const safeAreaStyles = useMemo(() =>
    [styles.safeAreaDefault, safeAreaStyle],
    [styles.safeAreaDefault, safeAreaStyle]
  );

  const calendarProps = useMemo(() => ({
    firstDay: 1,
    enableSwipeMonths: true,
    showSixWeeks: true,
  }), []);

  return (
    <SafeAreaView style={safeAreaStyles}>
      {isHeaderView && <Header />}
      {isDataDisplayView && (
        <DateDisplay
          onTouch={() => sheetRef.current?.snapToIndex(1)}
          mgTop={isHeaderView ? 0 : undefined}
        />
      )}
      {children}
      <View style={{ height: sizePaddingBottom }} />
      <BottomTab absolute />
      <MBottomSheetCalendar
        calendarProps={calendarProps}
        sheetRef={sheetRef}
      />
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
