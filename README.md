# StartU - Образовательная платформа

Мобильное приложение на React Native (Expo), предоставляющее образовательные и антистресс функции для студентов.

## Основные модули

- **Антистресс**: Включает техники заземления, дыхательные практики и методы остановки тревожных состояний
- **Личный кабинет**: Управление профилем и персональными настройками
- **Мой институт**: Интеграция с образовательным учреждением
- **PRO обучение**: Расширенные образовательные возможности
- **Онбординг**: Вводный тур по приложению

## Технологический стек

### Основа
- React Native (0.79.2)
- Expo SDK (53.0.7)
- TypeScript (5.8.3)
- Expo Router (5.0.5)

### Состояние и данные
- Zustand (5.0.4) для управления состоянием
- Expo SQLite (15.2.9) для локального хранения
- AsyncStorage для кеширования

### UI и навигация
- React Navigation 7
  - Bottom Tabs (7.3.10)
  - Elements (2.3.8)
- React Native Reanimated (3.17.4)
- React Native SVG (15.11.2)
- React Native Safe Area Context (5.4.0)
- Bottom Sheet (@gorhom/bottom-sheet 5.1.4)
- React Native Calendars (1.1312.0)
- Expo Blur (14.1.4)
- Expo Image (2.1.6)

### Дополнительные возможности
- Expo WebView (13.13.5)
- Expo Haptics (14.1.4)
- Expo Constants (17.1.5)
- Markdown Display (7.0.2)
- Moment.js (2.30.1)

### Инструментарий
- ESLint (9.25.0)
- TypeScript (5.8.3)
- Expo Dev Client (5.1.8)
- Expo Splash Screen (0.30.8)
- Expo Updates для OTA обновлений

## Скрипты

```bash
# Запуск проекта
npm start              # Стандартный запуск
npm run start-c        # Запуск с очисткой кеша

# Сборка и запуск
Простой вариант
  Скачать приложение Expo Go и запустить приложение, отсканировав qr код

Сложный вариант, через эмуляторы

npm run android        # Запуск на Android
npm run ios           # Запуск на iOS
npm run web           # Запуск веб-версии

# Разработка
npm run lint          # Проверка кода
```

## Структура проекта

```
app/
├── anti-stress/     # Антистресс модуль
├── be-own/          # Личный кабинет
├── my-institute/    # Модуль института
├── onboarding/      # Онбординг
└── pro-studies/     # PRO обучение

components/          # Переиспользуемые компоненты
├── AntiStress/
├── BottomTab/
├── Buttons/
└── ...

stores/             # Zustand сторы
language/           # Локализация
constants/          # Константы
utils/              # Утилиты
```

## Требования

- Node.js 18+
- Expo CLI
- Android Studio (для Android разработки)
- Xcode (для iOS разработки, только macOS)

## Разработка

Проект использует:
- ESLint для линтинга
- TypeScript для типизации
- File-based routing от Expo Router
