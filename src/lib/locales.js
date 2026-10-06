import { en, fr, ru, es, de, it } from '@atlaskit/editor-core/i18n'
// The Atlaskit i18n index does not export `vi`, its bundle is imported directly
import vi from '@atlaskit/editor-core/i18n/vi'

export const DEFAULT_LOCALE = 'en'

export const supportedLocales = ['en', 'fr', 'ru', 'vi', 'es', 'de', 'it']

const atlaskitBundles = { en, fr, ru, vi, es, de, it }

// Strings the Atlaskit editor bundle lacks (or words differently from
// what Twake Notes needs) for some languages
const atlaskitSupplements = {
  fr: require('locales/atlassian_missing_french.json'),
  ru: require('locales/atlassian_missing_russian.json'),
  vi: require('locales/atlassian_missing_vietnamese.json'),
  es: require('locales/atlassian_missing_spanish.json'),
  de: require('locales/atlassian_missing_german.json'),
  it: require('locales/atlassian_missing_italian.json')
}

const reactIntlLocaleData = {
  en: require('react-intl/locale-data/en'),
  fr: require('react-intl/locale-data/fr'),
  ru: require('react-intl/locale-data/ru'),
  vi: require('react-intl/locale-data/vi'),
  es: require('react-intl/locale-data/es'),
  de: require('react-intl/locale-data/de'),
  it: require('react-intl/locale-data/it')
}

/**
 * Returns the locale the app runs in: the user's locale when it is
 * supported, English otherwise.
 */
export const getAppLocale = userLocale =>
  supportedLocales.includes(userLocale) ? userLocale : DEFAULT_LOCALE

/**
 * Returns the react-intl locale data of every supported locale, to be
 * given to `addLocaleData`.
 */
export const getReactIntlLocaleData = () =>
  supportedLocales.map(locale => reactIntlLocaleData[locale]).filter(Boolean)

/**
 * Returns the messages of the Atlaskit editor for a locale. A locale the
 * Atlaskit bundle does not ship falls back to the English messages rather
 * than to `undefined`, which would crash the editor.
 */
export const getAtlaskitMessages = locale => {
  const bundle = atlaskitBundles[locale] || en
  return { ...bundle, ...(atlaskitSupplements[locale] || {}) }
}
