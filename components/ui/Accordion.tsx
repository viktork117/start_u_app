import { MaterialIcons } from "@expo/vector-icons";
import React, { memo, useCallback, useState } from "react";
import { Platform, StyleSheet, Text, TouchableOpacity, UIManager, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const ANIMATION_DURATION = 300;

const LABELS = {
  TIME: 'Время',
  ROOM: 'Аудитория',
  LECTURER: 'Преподаватель',
} as const;

const COLORS = {
  background: '#fff',
  border: '#047F8E',
  text: {
    primary: '#000',
    secondary: '#666',
    label: '#888',
  }
} as const;

type AccordionItemProps ={
  title: string;
  subtitle: string;
  time: string;
  room: string;
  lecturer: string;
}

const AccordionItem = ({
  title,
  subtitle,
  time,
  room,
  lecturer
}: AccordionItemProps) => {
  const [expanded, setExpanded] = useState(false);
  const animatedHeight = useSharedValue(0);

  const toggleAccordion = useCallback(() => {
    setExpanded(!expanded);
    animatedHeight.value = withTiming(
      expanded ? 0 : 110,
      { duration: ANIMATION_DURATION }
    );
  }, [animatedHeight, expanded]);

  const animatedStyle = useAnimatedStyle(() => ({
    height: animatedHeight.value,
    overflow: 'hidden',
    display: animatedHeight.value === 0 ? 'none' : 'flex',
  }));

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity
        style={styles.accordionHeader}
        onPress={toggleAccordion}
        activeOpacity={0.7}
      >
        <View style={styles.headerContent}>
          <Text style={styles.title}>{title}</Text>
          <MaterialIcons
            name={expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            size={24}
            color={COLORS.text.primary}
          />
        </View>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </TouchableOpacity>

      <Animated.View style={[styles.accordionBody, animatedStyle]}>
        <View style={[styles.detailRow, { paddingTop: 15 }]}>
          <Text style={styles.detailLabel}>{LABELS.TIME}</Text>
          <Text style={styles.detailValue}>{time}</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>{LABELS.ROOM}</Text>
          <Text style={styles.detailValue}>{room}</Text>
        </View>
        <View style={[styles.detailRow, { paddingBottom: 15 }]}>
          <Text style={styles.detailLabel}>{LABELS.LECTURER}</Text>
          <Text style={styles.detailValue}>{lecturer}</Text>
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  accordionContainer: {
    backgroundColor: COLORS.background,
    borderRadius: 8,
    marginBottom: 10,
    overflow: "hidden",
    elevation: 2,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  accordionHeader: {
    padding: 12,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.text.primary,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.text.secondary,
    marginTop: 5,
  },
  accordionBody: {
    borderTopWidth: 2,
    borderTopColor: COLORS.border,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
    paddingHorizontal: 15,
  },
  detailLabel: {
    fontSize: 14,
    color: COLORS.text.label,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: "500",
    color: COLORS.text.primary,
  },
});

export default memo(AccordionItem);
