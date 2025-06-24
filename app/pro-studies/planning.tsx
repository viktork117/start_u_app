import Header from "@/components/Header";
import TextComponent from "@/components/ui/TextComponent";
import React, { memo, useMemo } from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";

import ImageTwo from "@/assets/images/icons/Group 8.png";

const DATA = {
  title: "Планирование",
  intro: "  Учёба в университете – это не только лекции и зачёты, но и новые знакомства, увлечения и личное развитие. Однако без грамотного планирования легко утонуть в дедлайнах или, наоборот, забыть про отдых. Этот модуль поможет найти баланс между учёбой и личной жизнью без перегрузок.",
  whyTitle: "Почему планирование – это важно?",
  whyList: [
    "Снижает стресс – когда все задачи под контролем. Не нужно паниковать перед сессией.",
    "Освобождает время – вместо хаотичной учёбы 'на последнюю ночь' появляются свободные часы для хобби.",
    "Повышает продуктивность – структурированный график помогает сосредоточиться.",
    "Дает чувство контроля – вы управляете временем, а не оно вами."
  ],
  mistakesTitle: "5 главных ошибок в тайм-менеджменте и как их избежать",
  mistakesList: [
    { title: "  С понедельника начну", text: "  Откладывание усиливает нагрузку. Начинайте с малого – даже 30 минут в день лучше, чем ничего.\n" },
    { title: "  Учёба без перерывов", text: "  Переутомление снижает концентрацию. Используй метод «Помидора» – 25 минут работы и 5 минут отдыха для эффективного выполнения задач.\n" },
    { title: "  Нет приоритетов", text: "  Все задачи кажутся срочными, но это не так. Разделяйте дела по матрице Эйзенхауэра:\n  1. Срочно и важно (делайте сразу);\n  2. Важно, но не срочно (планируйте);\n  3. Срочно, но не важно (делегируйте);\n  4. Не срочно и не важно (отказывайтесь).\n" },
    { title: "  Соцсети крадут время", text: "  Бесконечный скроллинг съедает часы. Назначь фиксированные интервалы для соцсетей (например, только вечером).\n" },
    { title: "  Нет времени на отдых", text: "  Без восстановления продуктивность падает. Включайте в расписание обязательные паузы и сон (минимум 7 часов).\n" }
  ],
  howToTitle: "Как составить идеальное расписание?",
  howToList: [
    "Фиксируйте все дедлайны (в календаре или приложении-планировщике).",
    "Разбивайте задачи на небольшие блоки (занятия, чтение, отдых).",
    "Вносите важные мероприятия – если они запланированы, не пропускайте.",
    "Чередуйте сложное и лёгкое – после математики переключитесь на конспекты.",
    "Время для себя – тоже план: встречи с друзьями, спорт или сериалы должны быть в графике."
  ],
  tipsTitle: "Советы для баланса",
  tipsList: [
    "«Учебные дни» vs «выходные» – как в школе: 5-6 дней учёбы, 1-2 – отдых.",
    "Умейте говорить «нет» – если нагрузка слишком велика, отсюда второстепенное.",
    "Цифровой детокс – хотя бы 1 день в неделю без гаджетов.",
    "Рефлексия – в конце недели оценивайте, что получилось, а что нет."
  ],
  outroTitle: "Планирование – не про жёсткие рамки!",
  outro: "  Можно учиться эффективно и оставаться человеком – встречаться с друзьями, увлекаться хобби, отдыхать. Главное – не забывать о себе, и вы удивитесь, сколько времени у вас появится!"
};

const Planning = () => {
  const styles = useMemo(() => createStyle(), []);

  return (
    <ScrollView style={styles.containerBackground}>
      <View style={{ flexDirection: "column", justifyContent: "center", alignItems: "flex-start", width: "100%" }}>
        <Header bgColor={"#D1E7EE"} paddingHorizontal={0} />
      </View>

      <View style={{ width: "100%", marginTop: 8 }}>
        <TextComponent
          text={DATA.title}
          variantSize="L"
          variant="SO"
          color="#047F8E"
        />
      </View>

      <View style={{ marginTop: 24 }}>
        <TextComponent
          text={DATA.intro}
          variantSize="M"
          variant="NS_SB"
          color="#2D2D2D"
        />
      </View>

      <View style={{ marginTop: 32 }}>
        <TextComponent
          text={DATA.whyTitle}
          variantSize="M"
          variant="SO"
          color="#047F8E"
          align="center"
        />
      </View>
      <View style={{ marginTop: 32 }}>
        {DATA.whyList.map((item, idx) => (
          <TextComponent
            key={idx}
            text={`✔️ ${item}\n`}
            variantSize="M"
            variant="NS_R"
            color="#2D2D2D"
            style={{ marginBottom: 4 }}
          />
        ))}
      </View>

      <View style={{ marginTop: 8 }}>
        <View style={{ alignSelf: "center", marginBottom: 24 }}>
          <Image
            key={ImageTwo}
            source={ImageTwo}
            style={{ height: 270 }}
            resizeMode="contain"
          />
        </View>
        <TextComponent
          text={DATA.mistakesTitle}
          variantSize="M"
          variant="SO"
          color="#D74A28"
          align="center"
        />
      </View>
      <View style={{ marginTop: 16 }}>
        {DATA.mistakesList.map((item, idx) => (
          <View key={idx} style={{ rowGap: 16 }}>
            <TextComponent
              text={item.title}
              variantSize="M"
              variant="SO"
              color="#ED9344"
            />
            <TextComponent
              text={item.text}
              variantSize="M"
              variant="NS_R"
              color="#2D2D2D"
            />
          </View>
        ))}
      </View>

      <View style={{ marginTop: 32 }}>
        <TextComponent
          text={DATA.howToTitle}
          variantSize="M"
          variant="SO"
          color="#047F8E"
          align="center"
        />
      </View>
      <View style={{ marginTop: 32, rowGap: 5 }}>
        {DATA.howToList.map((item, idx) => (
          <TextComponent
            key={idx}
            text={`${idx + 1}. `}
            variantSize="L"
            variant="SO"
            color="#047F8E"
            style={{ marginBottom: 4 }}
          >
           <TextComponent
              text={`${item}`}
              variantSize="M"
              variant="NS_R"
              color="#2D2D2D"
            /> 
          </TextComponent>
        ))}
      </View>

      <View style={{ marginTop: 32 }}>
        <TextComponent
          text={DATA.tipsTitle}
          variantSize="M"
          variant="SO"
          color="#D74A28"
          align="center"
        />
      </View>
      <View style={{ marginTop: 16 }}>
        {DATA.tipsList.map((item, idx) => (
          <TextComponent
            key={idx}
            text={`📌 ${item}\n`}
            variantSize="M"
            variant="NS_R"
            color="#2D2D2D"
            style={{ marginBottom: 4 }}
          />
        ))}
      </View>

      <View style={{ marginTop: 32 }}>
        <TextComponent
          text={DATA.outroTitle}
          variantSize="M"
          variant="SO"
          color="#047F8E"
          align="center"
        />
      </View>
      <View style={{ marginTop: 32, marginBottom: 32 }}>
        <TextComponent
          text={DATA.outro}
          variantSize="M"
          variant="NS_R"
          color="#2D2D2D"
        />
      </View>
      <View style={{ height: 40 }} />
    </ScrollView>
  );
};

const createStyle = () =>
  StyleSheet.create({
    containerBackground: {
      display: "flex",
      flex: 1,
      backgroundColor: "#D1E7EE",
      paddingHorizontal: 16,
      rowGap: 16,
    },
  });

export default memo(Planning);

