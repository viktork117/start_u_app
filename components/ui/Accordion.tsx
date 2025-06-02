import { MaterialIcons } from "@expo/vector-icons";
import React, { memo, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Animated from "react-native-reanimated";

const AccordionItem = ({
  title,
  subtitle,
  time,
  room,
  lecturer
}: any) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Animated.View style={styles.accordionContainer}>
      <TouchableOpacity
        style={styles.accordionHeader}
        onPress={() => setExpanded(!expanded)}
      >
        <View style={styles.headerContent}>
          <Text style={styles.title}>{title}</Text>
          <MaterialIcons
            name={expanded ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            size={24}
            color="black"
          />
        </View>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </TouchableOpacity>

      {expanded && (
        <View style={styles.accordionBody}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Время</Text>
            <Text style={styles.detailValue}>{time}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Аудитория</Text>
            <Text style={styles.detailValue}>{room}</Text>
          </View>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Преподаватель</Text>
            <Text style={styles.detailValue}>{lecturer}</Text>
          </View>
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  accordionContainer: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    overflow: "hidden",
    elevation: 2,
    borderWidth: 2,
    borderColor: "#047F8E",
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
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  accordionBody: {
    padding: 15,
    paddingTop: 15,
    borderTopWidth: 2,
    borderTopColor: "#047F8E",
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  detailLabel: {
    fontSize: 14,
    color: "#888",
  },
  detailValue: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default memo(AccordionItem);
