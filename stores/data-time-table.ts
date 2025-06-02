type DataItemType = {
  id: number;
  name: string;
  dayWeek: string;
  metaInfo: {
    type: string;
    time: string;
    numberRoom: string;
    tither: string;
  };
}

// const DataItemTest: DataItemType = {
//   id: 0,
//   name: "Введение в специальность",
//   dayWeek: "ПН",
//   metaInfo: {
//     type: "Лекция",
//     time: "08:00 - 09:35",
//     numberRoom: "8.711",
//     tither: "Руденко Мария Павловна",
//   },
// }

export type DayWeekNames = "ПН" | "ВТ" | "СР" | "ЧТ" | "ПТ";

type DataDayType = Record<DayWeekNames, DataItemType[]>

const Data: DataDayType = {
  "ПН": [
    {
      id: 1,
      name: "Введение в специальность",
      dayWeek: "ПН",
      metaInfo: {
        type: "Лекция",
        time: "08:00 - 09:35",
        numberRoom: "8.711",
        tither: "Руденко Мария Павловна",
      },
    },
    {
      id: 2,
      name: "Математический анализ",
      dayWeek: "ПН",
      metaInfo: {
        type: "Практика",
        time: "09:50 - 11:25",
        numberRoom: "5.312",
        tither: "Иванов Сергей Петрович",
      },
    },
    {
      id: 3,
      name: "Физика",
      dayWeek: "ПН",
      metaInfo: {
        type: "Лекция",
        time: "12:00 - 13:35",
        numberRoom: "7.208",
        tither: "Петров Алексей Иванович",
      },
    },
    {
      id: 4,
      name: "Программирование",
      dayWeek: "ПН",
      metaInfo: {
        type: "Лабораторная",
        time: "14:00 - 15:35",
        numberRoom: "1.101",
        tither: "Козлов Дмитрий Сергеевич",
      },
    },
  ],
  "ВТ": [
    {
      id: 5,
      name: "Иностранный язык",
      dayWeek: "ВТ",
      metaInfo: {
        type: "Семинар",
        time: "10:00 - 11:35",
        numberRoom: "3.105",
        tither: "Смирнова Анна Владимировна",
      },
    },
    {
      id: 6,
      name: "История",
      dayWeek: "ВТ",
      metaInfo: {
        type: "Лекция",
        time: "12:00 - 13:35",
        numberRoom: "4.412",
        tither: "Николаева Елена Викторовна",
      },
    },
    {
      id: 7,
      name: "Физкультура",
      dayWeek: "ВТ",
      metaInfo: {
        type: "Практика",
        time: "14:00 - 15:35",
        numberRoom: "Спортзал 1",
        tither: "Сидоров Олег Николаевич",
      },
    },
  ],
  "СР": [
    {
      id: 8,
      name: "Дискретная математика",
      dayWeek: "СР",
      metaInfo: {
        type: "Лекция",
        time: "08:00 - 09:35",
        numberRoom: "6.304",
        tither: "Федорова Марина Александровна",
      },
    },
    {
      id: 9,
      name: "Базы данных",
      dayWeek: "СР",
      metaInfo: {
        type: "Практика",
        time: "09:50 - 11:25",
        numberRoom: "2.205",
        tither: "Григорьев Иван Васильевич",
      },
    },
    {
      id: 10,
      name: "Операционные системы",
      dayWeek: "СР",
      metaInfo: {
        type: "Лабораторная",
        time: "12:00 - 13:35",
        numberRoom: "1.103",
        tither: "Белов Андрей Михайлович",
      },
    },
    {
      id: 11,
      name: "Теория алгоритмов",
      dayWeek: "СР",
      metaInfo: {
        type: "Семинар",
        time: "14:00 - 15:35",
        numberRoom: "7.102",
        tither: "Кузнецова Татьяна Сергеевна",
      },
    },
  ],
  "ЧТ": [
    {
      id: 12,
      name: "Компьютерные сети",
      dayWeek: "ЧТ",
      metaInfo: {
        type: "Лекция",
        time: "09:00 - 10:35",
        numberRoom: "3.108",
        tither: "Морозов Денис Владимирович",
      },
    },
    {
      id: 13,
      name: "Веб-разработка",
      dayWeek: "ЧТ",
      metaInfo: {
        type: "Практика",
        time: "10:50 - 12:25",
        numberRoom: "4.301",
        tither: "Зайцева Ольга Игоревна",
      },
    },
    {
      id: 14,
      name: "Мобильные приложения",
      dayWeek: "ЧТ",
      metaInfo: {
        type: "Лабораторная",
        time: "13:00 - 14:35",
        numberRoom: "5.207",
        tither: "Тихонов Артём Викторович",
      },
    },
    {
      id: 15,
      name: "Безопасность информации",
      dayWeek: "ЧТ",
      metaInfo: {
        type: "Лекция",
        time: "15:00 - 16:35",
        numberRoom: "8.415",
        tither: "Волкова Екатерина Александровна",
      },
    },
    {
      id: 16,
      name: "Экономика",
      dayWeek: "ЧТ",
      metaInfo: {
        type: "Семинар",
        time: "17:00 - 18:35",
        numberRoom: "6.112",
        tither: "Соколов Павел Дмитриевич",
      },
    },
  ],
  "ПТ": [
    {
      id: 17,
      name: "Искусственный интеллект",
      dayWeek: "ПТ",
      metaInfo: {
        type: "Лекция",
        time: "08:00 - 09:35",
        numberRoom: "7.305",
        tither: "Ковалёв Алексей Николаевич",
      },
    },
    {
      id: 18,
      name: "Машинное обучение",
      dayWeek: "ПТ",
      metaInfo: {
        type: "Практика",
        time: "09:50 - 11:25",
        numberRoom: "2.104",
        tither: "Орлова Виктория Сергеевна",
      },
    },
    {
      id: 19,
      name: "Проектный семинар",
      dayWeek: "ПТ",
      metaInfo: {
        type: "Семинар",
        time: "12:00 - 13:35",
        numberRoom: "1.405",
        tither: "Михайлов Антон Павлович",
      },
    },
  ],
};

export default Data;