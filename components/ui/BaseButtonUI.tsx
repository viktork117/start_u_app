import React, {
  memo,
  useCallback,
  useMemo,
  type FC,
} from "react";
import {
  StyleSheet,
  Vibration,
  View,
} from "react-native";
import { BaseButton } from "react-native-gesture-handler";

import { ButtonsBaseProps } from "./";

const BaseButtonUI: FC<ButtonsBaseProps> = ({
  onPress,
  style,
  children
}) => {
  const { vibrate } = Vibration;

  const styles = useMemo(() => fnGetStyles(), []);

  const onPressVibration = useCallback(() => {
    onPress();
  }, [onPress]);

  const vibration = useCallback(() => {
    vibrate(60);
  }, [vibrate]);

  return (
    <BaseButton
      onPress={onPressVibration}
      style={[
        styles.button,
        style,
      ]}>
      <View onTouchStart={vibration}>
        {children}
      </View>
    </BaseButton>
  );
}

const fnGetStyles = () =>
  StyleSheet.create({
    button: {
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 10,
    }
})

export default memo(BaseButtonUI);
