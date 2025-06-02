import { useRouter } from "expo-router";
import { memo, useCallback } from "react";

import Container from "@/components/AntiStress/Container";

const StopStart = () => {
  const routs = useRouter();

  const goBack = useCallback(() => {
    routs.back();
  }, [routs])

  const go = useCallback(() => {
    routs.push("/anti-stress/stop/game");
  }, [routs])

  return (
    <Container
      textOne={"  Тревога или стресс захлестывают?"}
      textTwo={"  Метод «СТОП» поможет взять паузу и осознанно выбрать реакцию. Всего 4 шага — и ты снова в контроле."}
      textThreeHeader={"  Следуй по шагам:"}
      textThree={`Stop - остановись физически. Think - оцени мысли трезво. Observe - просканируй тело 
и обстановку. Proceed - выбери разумное действие.`}
      textFour={"Поехали?"}
      onPressBack={goBack}
      onPressGo={go}
    />
  )
}

export default memo(StopStart);
