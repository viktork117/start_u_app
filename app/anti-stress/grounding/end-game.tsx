import { useRouter } from "expo-router";
import { memo, useMemo } from "react";
import { Image, StyleSheet, useWindowDimensions, View } from "react-native";

import TextComponent from "@/components/ui/TextComponent";

import ButtonGreen from "@/components/Buttons/ButtonGreen";
import CommentPNG from "../../../assets/images/Union.png";
import ImageTwo from "../../../assets/images/icons/Group 15.png";

const EndGame = () => {
  const routs = useRouter();
  const { height, width } = useWindowDimensions();

  const styles = useMemo(() => createStyle(), [])

  return (
    <View style={styles.containerBackground}>
      <View key={1} style={{ position: "absolute", top: height / 100 * -15 }}>
        <Image
          source={CommentPNG}
          style={{ height: height / 10 * 7, width: width / 100 * 110 }}
          resizeMode="contain"
        />
      </View>
      <View
        key={2}
        style={{
          width: "90%",
          marginTop: height / 100 * 12,
          marginBottom: height / 100 * 13,
        }}>
        <TextComponent
          text={"  Молодец!\n\n  Теперь сделай глубокий вдох и выдох.\n\n  Как ты себя чувствуешь? Если тревога осталась — повтори технику через пару минут."}
          color={"#000000"}
          variant="NS_L"
        />
      </View>
      <View style={styles.container}>
        <Image
          key={ImageTwo}
          source={ImageTwo}
          style={{ height:  height / 100 * 30 }}
          resizeMode="contain"
        />
      </View>
      <View style={{ alignSelf: "stretch", marginBottom: 70, rowGap: 15 }}>
        <ButtonGreen
          text={"Повторить!"}
          onClick={() => {
            routs.push("/anti-stress/grounding");
          }}
          textColor={"#fff"}
        />
        <ButtonGreen
          text={"Завершить"}
          onClick={() => {
            routs.push("/anti-stress");
          }}
          textColor={"#fff"}
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
      backgroundColor: "#D1E7EE",
      paddingHorizontal: 16,
      justifyContent: "space-between",
    },
    container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      rowGap: 15,
    }
  })

export default memo(EndGame);
