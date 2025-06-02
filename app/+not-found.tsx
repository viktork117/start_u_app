import { useRouter } from 'expo-router';
import { useCallback, useMemo } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import ImageOne from "../assets/images/not_found.png";

type TextContent = {
  readonly TITLE: string;
  readonly SUBTITLE: string;
  readonly BUTTON: string;
};

type ColorScheme = {
  readonly background: string;
  readonly primary: string;
  readonly textDark: string;
  readonly textGray: string;
  readonly textLight: string;
  readonly border: string;
  readonly secondaryText: string;
};

const TEXTS: TextContent = {
  TITLE: 'Упс... Страница не найдена',
  SUBTITLE: 'Похоже, такой страницы не существует или она была перемещена',
  BUTTON: 'На главную',
};

const COLORS: ColorScheme = {
  background: '#f8f9fa',
  primary: '#007bff',
  textDark: '#343a40',
  textGray: '#6c757d',
  textLight: 'white',
  border: '#047F8E',
  secondaryText: '#495057',
};

const LAYOUT = {
  IMAGE_SIZE: 250,
  BUTTON_MAX_WIDTH: 300,
  CONTAINER_PADDING: 20,
  BORDER_WIDTH: 4,
  BORDER_RADIUS: 8,
  SPACING: {
    MEDIUM: 15,
    LARGE: 30,
  },
} as const;

type HomeButtonProps = {
  onPress: () => void;
  text: string;
  styles: ReturnType<typeof createStyles>;
};

const HomeButton: React.FC<HomeButtonProps> = ({ onPress, text, styles }) => (
  <TouchableOpacity 
    style={[styles.button, styles.secondaryButton]}
    onPress={onPress}
  >
    <Text style={[styles.buttonText, styles.secondaryButtonText]}>{text}</Text>
  </TouchableOpacity>
);

type NotFoundScreenProps = {
  imageSize?: number;
};

const NotFoundScreen: React.FC<NotFoundScreenProps> = ({ 
  imageSize = LAYOUT.IMAGE_SIZE 
}) => {
  const router = useRouter();
  const styles = useMemo(() => createStyles(COLORS), []);
  const handlePress = useCallback(() => router.push('/'), [router]);

  return (
    <View style={styles.container}>
      <Image 
        source={ImageOne}
        style={[styles.image, { width: imageSize, height: imageSize }]}
        resizeMode="contain"
      />
      
      <Text style={styles.title}>{TEXTS.TITLE}</Text>
      
      <Text style={styles.subtitle}>
        {TEXTS.SUBTITLE}
      </Text>
      
      <HomeButton 
        onPress={handlePress}
        text={TEXTS.BUTTON}
        styles={styles}
      />
    </View>
  );
};

const createStyles = (colors: ColorScheme) => {
  const base = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: LAYOUT.CONTAINER_PADDING,
      backgroundColor: colors.background,
    },
    image: {
      width: LAYOUT.IMAGE_SIZE,
      height: LAYOUT.IMAGE_SIZE,
      marginBottom: LAYOUT.SPACING.LARGE,
    },
  });

  const typography = StyleSheet.create({
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: colors.textDark,
      marginBottom: LAYOUT.SPACING.MEDIUM,
      textAlign: 'center',
    },
    subtitle: {
      fontSize: 16,
      color: colors.textGray,
      textAlign: 'center',
      marginBottom: LAYOUT.SPACING.LARGE,
      paddingHorizontal: LAYOUT.CONTAINER_PADDING,
      lineHeight: 24,
    },
  });

  const buttons = StyleSheet.create({
    button: {
      width: '100%',
      maxWidth: LAYOUT.BUTTON_MAX_WIDTH,
      padding: LAYOUT.SPACING.MEDIUM,
      backgroundColor: colors.primary,
      borderRadius: LAYOUT.BORDER_RADIUS,
      alignItems: 'center',
      marginBottom: LAYOUT.SPACING.MEDIUM,
    },
    buttonText: {
      color: colors.textLight,
      fontSize: 16,
      fontWeight: '600',
    },
    secondaryButton: {
      backgroundColor: colors.textLight,
      borderWidth: LAYOUT.BORDER_WIDTH,
      borderColor: colors.border,
    },
    secondaryButtonText: {
      color: colors.secondaryText,
    },
  });

  return {
    ...base,
    ...typography,
    ...buttons,
  };
};

export default NotFoundScreen;