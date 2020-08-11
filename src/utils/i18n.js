import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from '../translations/en';

const languageDetector = {
  type: 'languageDetector',
  async: true,
  detect: cb => cb('en'),
  init: () => {},
  cacheUserLanguage: () => {},
};

// https://github.com/i18next/react-i18next/blob/master/example/react-native/App.js
i18next
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,
    resources: {
      en: {
        translation: en,
      },
    },
  });
