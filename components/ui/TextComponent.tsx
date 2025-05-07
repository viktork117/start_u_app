import React, {
  memo,
  type FC,
} from "react";
import { Text } from "react-native";

type TextComponentProps = {
  text: string;
};

const TextComponent: FC<TextComponentProps> = ({
  text,
}) => {
  return(
    <Text>
      {text}
    </Text>
  )
};

export default memo(TextComponent);
