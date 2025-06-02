import { memo, useMemo, useState } from "react";
import { Image, StyleSheet, useWindowDimensions, View } from "react-native";
import { useRouter } from "expo-router";

import TextComponent from "@/components/ui/TextComponent";

import ButtonGreen from "@/components/Buttons/ButtonGreen";
import CommentPNG from "../../../assets/images/Union.png";
import ImageTwo from "../../../assets/images/icons/Group 120.png";

import first from "../../../assets/images/textGame/5 предметов.png";
import second from "../../../assets/images/textGame/4 ощущения.png";
import third from "../../../assets/images/textGame/3 звука.png";
import fourth from "../../../assets/images/textGame/2 звука.png";
import fifth from "../../../assets/images/textGame/1 вкус.png";

const data = [
  { text: "  Глубоко вдохни и следуй за мной — назови...", image: first },
  { text: "  Теперь сосредоточься на теле. Назови 4 вещи, которые ты ощущаешь кожей...", image: second },
  { text: "  Прислушайся. Какие 3 звука ты слышишь?", image: third },
  { text: "  Почувствуй 2 запаха вокруг. Если не улавливаешь — вспомни недавние...", image: fourth },
  { text: "  Последний шаг: какой вкус ты ощущаешь во рту?", image: fifth }
]

const Game = () => {
  const routs = useRouter();
  const { height, width } = useWindowDimensions();
  const [ progress, setProgress ] = useState<number[]>([0]);

  const styles = useMemo(() => createStyle(), [])

  return (
    <View style={styles.containerBackground}>
      <View key={1} style={{ position: "absolute", top: height / 100 * -25 }}>
        <Image
          source={CommentPNG}
          style={{ height: height / 10 * 7, width: width / 100 * 110 }}
          resizeMode="contain"
        />
      </View>
      <View
        key={2}
        style={{
          width: "80%",
          height: height / 10 * 1,
          marginTop: height / 100 * 15,
          marginBottom: height / 100 * 13,
        }}>
        <TextComponent
          key={data[progress.length - 1].text}
          text={data[progress.length - 1].text}
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
        <Image
          key={data[progress.length - 1].image}
          source={data[progress.length - 1].image}
          resizeMode="contain"
          style={{  height: 39 }}
        />
      </View>
      <View style={{ alignSelf: "stretch", marginBottom: 70, rowGap: 15 }}>
        <View key={123} style={{ height: 8, width: width - 32, backgroundColor: "#fff", borderRadius: 5, display: "flex", flexDirection: "row" }}>
          {progress.map((item, index) => {
            if (progress.length - 1 > 4) return null;
            if (index === progress.length - 1) {
              return (
                <View key={index} style={{ width: (width - 32) / 5, backgroundColor: "#5B92AA", borderTopRightRadius: 5, borderBottomRightRadius: 5 }} />
              )
            }
            return (
              <View key={index} style={{ width: (width - 32) / 5, backgroundColor: "#5B92AA" }} />
            )
          })}
        </View>
        <ButtonGreen
          text={progress.length - 1 >= 4 ? "Завершить" : "Дальше..."}
          onClick={() => {
            if (progress.length - 1 >= 4) {
              routs.push("/anti-stress/grounding/end-game")
              return;
            };
            setProgress((progress) => [...progress, 0]);
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

export default memo(Game);
