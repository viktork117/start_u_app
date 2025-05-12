import React, {
  memo,
  type FC,
} from "react";

import ButtonBase from "../ui/ButtonBase";
import TextComponent from "../ui/TextComponent";

import { ButtonSelectionsProps } from "./";

const ButtonSelections: FC<ButtonSelectionsProps> = ({
  text,
  onClick,
  height = 86,
  activeButton = false,
  textColor,
  backgroundColor,
  disabled = false
}) => {
  return (
    <ButtonBase
      onPress={onClick}
      disabled={disabled}
      style={{
        backgroundColor: backgroundColor,
        height: height,
        flexGrow: 1,
        borderColor: textColor,
        borderWidth: activeButton ? 4 : 0,
      }}>
      <TextComponent
        text={text}
        variant="SO"
        variantSize={height === 86 ? "L" : "M"}
        color={textColor}
      />
    </ButtonBase>
  );
}

export default memo(ButtonSelections);