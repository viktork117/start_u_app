import React, {
  memo,
  type FC,
} from "react";
import { View, StyleSheet } from "react-native";

import { type CommentComponentProps } from "./";

const CommentComponent: FC<CommentComponentProps> = ({
  backgroundColor,
  children,
}) => {
  return (
    <View style={[
      styles.commentContainer,
      { backgroundColor: backgroundColor }
    ]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  commentContainer: {
    borderRadius: 10,
    width: "100%",
    padding: 20,
    rowGap: 20
  }
})

export default memo(CommentComponent);
