import React, {
  memo,
  useMemo,
  type FC,
} from "react";
import {
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import { ButtonsBaseProps } from "./";

const ButtonBase: FC<ButtonsBaseProps> = ({
  onPress,
  style,
  disabled = false,
  children
}) => {
  const styles = useMemo(() => fnGetStyles(disabled), [disabled]);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.button,
        style,
      ]}
      disabled={disabled}>
      {children}
    </TouchableOpacity>
  );
}

const fnGetStyles = (
  disabled: boolean
) => StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    opacity: disabled ? 0.2 : 1,
  }
})

export default memo(ButtonBase);
