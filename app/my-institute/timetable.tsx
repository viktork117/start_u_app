import { 
  useCallback,
  useState,
  type FC,
} from "react";
import { useWindowDimensions, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import MainContainer from "@/components/Main/MainContainer";
import AccordionItem from "@/components/ui/Accordion";
import WeekDayButton from "@/components/Buttons/WeekDay";
import SkeletonLoader from "@/components/MyInstitute/TimeTableLoad";
import TextComponent from "@/components/ui/TextComponent";

import WeeklySchedule, { DayWeekNames } from "../../stores/data-time-table";

const TimeTable: FC = () => {
  const workWeekDays = ["ПН", "ВТ", "СР", "ЧТ", "ПТ"];
  const workWeekDaysFull = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница"];
  
  const [activeDay, setActiveDay] = useState<DayWeekNames>("ПН");
  const [isLoading, setIsLoading] = useState(false);
  const { width, height } = useWindowDimensions();
  
  let indexDay = workWeekDays.indexOf(activeDay)

  const changeDay = useCallback((day: string) => {
    setIsLoading(true);
    setActiveDay(day as DayWeekNames);
    setTimeout(() => {
      setIsLoading(false);
    }, 160);
  }, [])

  return (
    <MainContainer isHeaderView>
      <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-between", paddingTop: 20, paddingHorizontal: 16, columnGap: 10 }}>
        {workWeekDays.map((day, index) => {
          return (
            <WeekDayButton
              key={index}
              text={day}
              onClick={() => changeDay(day)}
              textColor={"#047F8E"}
              height={35}
              activeButton={day === String(activeDay)}
            />
          );
        })}
      </View>
      <ScrollView key="1#sdf#4343" style={{ paddingHorizontal: 16, flex: 1, paddingTop: 20 }}>
        {isLoading 
          ? (
            <SkeletonLoader numItems={WeeklySchedule[activeDay].length} />
          ) : (
            <>
              <View 
                style={{ 
                  borderWidth: 2,
                  borderColor: "#047F8E",
                  borderRadius: 10,
                  height: 56,
                  marginBottom: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <TextComponent
                  text={workWeekDaysFull[indexDay]}
                  variant="NS_SB"
                  variantSize="L"
                  color={"#2D2D2D"}
                  weight={700}
                />
              </View>
              {WeeklySchedule[activeDay].map((item, index) => (
                <AccordionItem
                  key={item.id}
                  title={`${index +1 }. ${item.name}`}
                  subtitle={item.metaInfo.type}
                  time={item.metaInfo.time}
                  room={item.metaInfo.numberRoom}
                  lecturer={item.metaInfo.tither}
                />
              ))}
              <View style={{ height: 150 }} />
            </>
          )}
      </ScrollView>
    </MainContainer>
  );
}

export default TimeTable;
