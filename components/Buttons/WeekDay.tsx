import React, {
  memo,
  type FC,
} from "react";

import ButtonBase from "../ui/ButtonBase";
import TextComponent from "../ui/TextComponent";

import { ButtonSelectionsProps } from "./";

const WeekDayButton: FC<ButtonSelectionsProps> = ({
  text,
  onClick,
  height = 36,
  activeButton = false,
  textColor = "#047F8E",
  backgroundColor = "#F3F7F8",
  disabled = false
}) => {
  return (
    <ButtonBase
      onPress={onClick}
      disabled={disabled}
      style={{
        backgroundColor: activeButton ? "#047F8E" : backgroundColor,
        height: height,
        flexGrow: 1,
        borderColor: textColor,
        borderWidth: height >= 56 ? 4 : 2,
      }}>
      <TextComponent
        text={text}
        variant="SO"
        variantSize={height >= 56 ? "L" : "M"}
        color={activeButton ? "#FFFFFF" : textColor}
      />
    </ButtonBase>
  );
}

export default memo(WeekDayButton);