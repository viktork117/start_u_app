import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import {
  memo,
  useMemo,
  type FC,
  type RefObject,
  type ReactNode,
} from "react";
import { StyleSheet, useWindowDimensions } from "react-native";

type BottomSheetBaseProps = {
  sheetRef: RefObject<BottomSheet | null>;
  children: ReactNode | ReactNode[];
};

const BottomSheetBase: FC<BottomSheetBaseProps> = ({
  sheetRef,
  children,
}) => {
  const { height } = useWindowDimensions();
  
  const scaleHeight = useMemo(() => {
    if (height <= 600) {
      return 2;
    }
    if (height <= 1000) {
      return 1.5;
    }
    return 1;
  }, [height])

  const snapPoints = useMemo(() => [150, (height / 100 * 35 * scaleHeight)], [height, scaleHeight]);

  return (
    <BottomSheet
        ref={sheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        enableDynamicSizing={false}
        onChange={() => {}}
        style={{ flex: 1, zIndex: 9999 }}>
        <BottomSheetView style={styles.contentContainer}>
          {children}
        </BottomSheetView>
      </BottomSheet>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: "white",
    borderRadius: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 25,
  },
});

export default memo(BottomSheetBase);
