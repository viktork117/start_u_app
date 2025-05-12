import React, {
  memo,
  type FC,
} from "react";

import ButtonBase from "../ui/ButtonBase";
import TextComponent from "../ui/TextComponent";

import { ButtonTextProps } from "./";

const ButtonText: FC<ButtonTextProps> = ({
  text,
  onClick,
  textColor,
  disabled = false
}) => {
  return (
    <ButtonBase
      onPress={onClick}
      disabled={disabled}
      style={{ height: 56 }}
    >
      <TextComponent
        text={text}
        variant="NS_SB"
        variantSize="L"
        color={textColor}
      />
    </ButtonBase>
  );
}

export default memo(ButtonText);