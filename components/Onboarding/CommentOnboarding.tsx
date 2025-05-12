import React, {
  memo,
  type FC,
} from "react";

import TextComponent from "../ui/TextComponent";
import CommentComponent from "../ui/CommentComponent";

import { type CommentOnboardingProps } from ".";
import { onboarding } from "@/constants/Colors";

const CommentOnboarding: FC<CommentOnboardingProps> = ({
  textOne,
  textTwo,
}) => {
  const { commentBackground, commentText } = onboarding;

  return (
    <CommentComponent backgroundColor={commentBackground}>
      {textOne && <TextComponent text={textOne} color={commentText} />}
      <TextComponent text={textTwo} color={commentText} />
    </CommentComponent>
  );
}

export default memo(CommentOnboarding);
