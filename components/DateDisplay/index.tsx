import moment from "moment";
import { memo, useMemo } from "react";
import { StyleSheet, useWindowDimensions, View } from "react-native";
import { BaseButton } from "react-native-gesture-handler";

import TextComponent from "../ui/TextComponent";

import { main } from "@/constants/Colors";
import { dateRanges } from "@/constants/date";

import { type MainColorsType } from "@/constants";

const DateDisplay = ({
  onTouch,
  mgTop
}: any) => {
  const { height } = useWindowDimensions();
  
  const date = useMemo(() => new Date(), []);

  const mgTopConst = useMemo(() => height / 100 * 8.69, [height]);

  const weekNumber = useMemo(
    () => moment(date).isoWeek(),
    [date]
  );
  const vn = useMemo(
    () => weekNumber % 2 > 0 ? "Н" : "В",
    [weekNumber]
  );
  const week = useMemo(
    () => dateRanges[weekNumber - 1],
    [weekNumber]
  );
  const styles = useMemo(
    () => fnGetStyles(main, mgTopConst, mgTop),
    [mgTopConst, mgTop]
  );

  return (
    <View>
      <BaseButton style={styles.dateDisplay} onPress={onTouch}>
        <TextComponent
          key={1}
          text={week}
          color={main.text}
          variant="NS_R"
          variantSize="L"
        />
        <TextComponent
          key={2}
          text={vn}
          color={main.text}
          variant="NS_R"
          variantSize="L"
        />
      </BaseButton>
    </View>
  );
}

const fnGetStyles = (
  colors: MainColorsType,
  mgTopConst: number,
  mgTop?: number
) => 
  StyleSheet.create({
    dateDisplay: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 18,
      paddingVertical: 13,
      borderRadius: 10,
      borderWidth: 4,
      borderColor: colors.border,
      marginTop: mgTop ?? mgTopConst,
      marginHorizontal: 16,
    }
});

export default memo(DateDisplay);
