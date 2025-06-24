import { useRouter } from "expo-router";
import { memo, useCallback, useMemo } from "react";
import { StyleSheet, View } from "react-native";

import ButtonGreen from "@/components/Buttons/ButtonGreen";
import TextComponent from "@/components/ui/TextComponent";
import CommentComponent from "@/components/ui/CommentComponent";

const TEXT = "  Молодец!\n\n  Теперь сделай глубокий вдох и выдох. Как ты себя чувствуешь?\n\n  Если тревога осталась — повтори технику через пару минут.";

const COLORS = {
  background: "#D1E7EE",
  text: "#000000",
  buttonText: "#fff",
} as const;

const LAYOUT = {
  COMMENT_TOP_OFFSET: -15,
  COMMENT_HEIGHT_MULTIPLIER: 7,
  COMMENT_WIDTH_MULTIPLIER: 110,
  TEXT_MARGIN_TOP: 12,
  TEXT_MARGIN_BOTTOM: 13,
  CONTAINER_WIDTH_PERCENT: "90%",
  IMAGE_HEIGHT_MULTIPLIER: 30,
  BUTTON_MARGIN_BOTTOM: 70,
  BUTTON_ROW_GAP: 16,
  PADDING_HORIZONTAL: 16,
} as const;

const EndGame = () => {
  const routs = useRouter();

  const styles = useMemo(() => createStyle(), []);

  const onRepeat = useCallback(() => routs.push("/anti-stress/stop"), [routs]);
  const onFinish = useCallback(() => routs.push("/anti-stress"), [routs]);

  return (
    <View style={styles.containerBackground}>
      <View style={{ height: 90 }} />
      <CommentComponent backgroundColor={"#fff"}>
        <TextComponent
          key={TEXT}
          text={TEXT}
          color={"#000000"}
          variant="NS_L"
          variantSize="B"
        /> 
      </CommentComponent>
      <View style={styles.buttonContainer}>
        <ButtonGreen
          text={"Повторить!"}
          onClick={onRepeat}
          textColor={COLORS.buttonText}
        />
        <ButtonGreen
          text={"Завершить"}
          onClick={onFinish}
          textColor={COLORS.buttonText}
        />
      </View>
    </View>
  )
}

const createStyle = () => 
  StyleSheet.create({
    containerBackground: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: COLORS.background,
      paddingHorizontal: LAYOUT.PADDING_HORIZONTAL,
      rowGap: LAYOUT.BUTTON_ROW_GAP,
    },
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      rowGap: LAYOUT.BUTTON_ROW_GAP,
    },
    commentImage: {
      position: "absolute",
      top: LAYOUT.COMMENT_TOP_OFFSET,
    },
    textContainer: {
      width: LAYOUT.CONTAINER_WIDTH_PERCENT,
      marginTop: LAYOUT.TEXT_MARGIN_TOP,
      marginBottom: LAYOUT.TEXT_MARGIN_BOTTOM,
    },
    mainImage: {
      height: LAYOUT.IMAGE_HEIGHT_MULTIPLIER,
    },
    buttonContainer: {
      alignSelf: "stretch",
      marginBottom: LAYOUT.BUTTON_MARGIN_BOTTOM,
      rowGap: LAYOUT.BUTTON_ROW_GAP,
    },
  });

export default memo(EndGame);
