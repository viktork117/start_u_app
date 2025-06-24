import Header from "@/components/Header";
import TextComponent from "@/components/ui/TextComponent";
import React, { memo, useMemo } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

const DATA = {
  title: "Нейросети: исполь - зуй правильно",
  intro: "  Нейросети и искусственный интеллект стали мощными инструментами в образовании, помогая студентам быстрее усваивать материал, структурировать информацию и находить ответы на сложные вопросы.",
  canDo: [
    "- генерировать конспекты - сокращать лекции до ключевых тезисов;",
    "- объяснять сложные темы - простыми словами, с примерами;",
    "- помогать с переводами - быстро переводить научные статьи;",
    "- проверять задания - находить ошибки в текстах и коде."
  ],
  warningTitle: "No! Нейросети - не замена знаниям",
  warningList: [
    "Они могут ошибаться - нейросети иногда выдают ложную или неточную информацию.",
    "Мешают критическому мышлению - если просто копировать ответы, вы не научитесь анализировать.",
    "Проблемы с уникальностью - тексты, созданные ИИ, могут быть распознаны как плагиат.",
    "Потеря навыков - постоянная помощь нейросетей снижает способность решать задачи самостоятельно."
  ],
  howToTitle: "Как использовать нейросети правильно?",
  howToList: [
    "Как помощник, а не замена - сначала попробуйте разобраться сами, а потом проверяйте с ИИ.",
    "Перепроверяйте факты - сверяйте информацию с учебниками и научными источниками.",
    "Не копируйте слепо - перерабатывайте ответы нейросети своими словами.",
    "Развивайте навыки - используйте ИИ для тренировки, а не для готовых решений."
  ],
  outro: "  Нейросети - это инструмент, а не волшебная палочка. Грамотное применение поможет в учёбе, но только ваша работа с материалом даст настоящие знания!"
};

const Neural = () => {
  // const { height, width } = useWinpdowDimensions();

  const styles = useMemo(() => createStyle(), [])

  return (
    <ScrollView style={styles.containerBackground}>
      {/* Header */}
      <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "flex-start", width: "100%" }}>
        <Header bgColor={"#D1E7EE"} paddingHorizontal={0} />
      </View>

      <View style={{ width: "100%" }}>
        <TextComponent
          text={DATA.title}
          variantSize="L"
          variant="SO"
          color="#047F8E"
        />
      </View>

      <View style={{ marginTop: 32 }}>
        <TextComponent
          text={DATA.intro}
          variantSize="B"
          variant="NS_SB"
          color="#2D2D2D"
        />
      </View>

      <View style={{ marginTop: 16 }}>
        <TextComponent
          text={"Они могут: "}
          variantSize="B"
          variant="NS_R"
          color="#2D2D2D"
          style={{ marginBottom: 4 }}
        />
        {DATA.canDo.map((item, idx) => {
          const texts = item.split("-");
          return (
            <View key={idx} style={{ flexDirection: "row" }}>
              <TextComponent
                text={`-${String(texts[1])}`}
                color="#2D2D2D"
                variantSize="B"
                variant="NS_R"
                weight={"700"}
              >
                <TextComponent
                text={`-${String(texts[2])}`}
                variantSize="B"
                variant="NS_R"
                color="#2D2D2D"
              />
              </TextComponent>
            </View>
        )})}
      </View>

      <View style={{ marginTop: 32 }}>
        <TextComponent
          text={DATA.warningTitle}
          variantSize="B"
          variant="SO"
          color="#D74A28"
          align="center"
        />
      </View>

      <View style={{ marginTop: 32 }}>
        <TextComponent
          text={"  Использовать их бездумно - значит обманывать себя. Вот почему: "}
          variantSize="B"
          variant="NS_SB"
          color="#2D2D2D"
        />
      </View>

      <View style={{ marginTop: 16 }}>
        {DATA.warningList.map((item, idx) =>  {
          const texts = item.split("-");
          return (
            <View key={idx} style={{ flexDirection: "row" }}>
              <TextComponent
                text={`🔻${String(texts[0])}`}
                color="#2D2D2D"
                variantSize="B"
                variant="NS_R"
                weight={"700"}
              >
                <TextComponent
                text={`-${String(texts[1])}`}
                variantSize="B"
                variant="NS_R"
                color="#2D2D2D"
              />
              </TextComponent>
            </View>
        )})}
      </View>

      <View style={{ marginTop: 32 }}>
        <TextComponent
          text={DATA.howToTitle}
          variantSize="B"
          variant="SO"
          color="#047F8E"
          align="center"
        />
      </View>

      <View style={{ marginTop: 32 }}>
        {DATA.howToList.map((item, idx) => (
          <TextComponent
            key={idx}
            text={`✔️ ${item}\n`}
            variantSize="B"
            variant="NS_R"
            color="#2D2D2D"
            style={{ marginBottom: 2 }}
          />
        ))}
      </View>

      <View style={{ marginTop: 20, marginBottom: 8 }}>
        <TextComponent
          text={DATA.outro}
          variantSize="B"
          variant="NS_R"
          color="#2D2D2D"
        />
      </View>
      <View style={{ height: 100 }} />
    </ScrollView>
  )
}

const createStyle = () => 
  StyleSheet.create({
    containerBackground: {
      display: "flex",
      flex: 1,
      backgroundColor: "#D1E7EE",
      paddingHorizontal: 16,
      rowGap: 16,
    },
  })

export default memo(Neural);

