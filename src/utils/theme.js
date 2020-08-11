import { Platform } from 'react-native';

const lightShades = '#F9FBFC';

const theme = {
  lightShades: '#F6F5F5',
  primaryColor: '#00a4eb',
  mainBrandColor: '#2D0C57',
  secondaryColor: '#ffd102',
  liteAccent: '#CDB8D3',
  darkAccent: '#7F92D6',
  borderColor: '#D9D0E3',
  textColor: '#222222',
  textColorLite: '#9586A8',
  textBlue: '#00a4eb',
  textGrey: '#9B9B9B',
  textColorAlt: '#FEFEFE',
  backgroundColor: '#ffffff',
  fontFamily: 'Rubik',
  fontSizeExtraSmall: 11,
  fontSizeSmall: 14,
  fontSize: 16,
  fontSizeMedium: 22,
  fontSizeLarge: 30,
  fontSizeExtraLarge: 32,
  shadowColor: 'rgba(0, 0, 0, 0.1)',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 1,
  shadowRadius: 10,
  activeButtonOpacity: 0.8,
};

export default theme;

export const boxShadow = Platform.select({
  ios: {
    shadowColor: theme.shadowColor,
    shadowOffset: theme.shadowOffset,
    shadowOpacity: theme.shadowOpacity,
    shadowRadius: theme.shadowRadius,
  },
  android: {
    elevation: 3,
  },
});
