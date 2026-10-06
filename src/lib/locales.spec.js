import {
  getAppLocale,
  getAtlaskitMessages,
  getReactIntlLocaleData,
  supportedLocales
} from './locales'

// The real bundle ships es, de and it; `es` is left out here to exercise
// the fallback for a locale the Atlaskit bundle would not ship
jest.mock('@atlaskit/editor-core/i18n', () => ({
  en: { 'fabric.editor.bold': 'Bold', 'fabric.editor.italic': 'Italic' },
  fr: { 'fabric.editor.bold': 'Gras' },
  ru: { 'fabric.editor.bold': 'Полужирный' },
  vi: { 'fabric.editor.bold': 'In đậm' },
  de: { 'fabric.editor.bold': 'Fett' },
  it: { 'fabric.editor.bold': 'Grassetto' }
}))

describe('getAppLocale', () => {
  it('keeps a supported locale', () => {
    expect(getAppLocale('es')).toEqual('es')
    expect(getAppLocale('de')).toEqual('de')
    expect(getAppLocale('it')).toEqual('it')
  })

  it('falls back to English for an unknown locale', () => {
    expect(getAppLocale('made-up-locale')).toEqual('en')
    expect(getAppLocale(undefined)).toEqual('en')
  })
})

describe('getAtlaskitMessages', () => {
  it('returns messages for every supported locale', () => {
    supportedLocales.forEach(locale => {
      const messages = getAtlaskitMessages(locale)
      expect(Object.keys(messages).length).toBeGreaterThan(0)
    })
  })

  it('merges the Twake Notes supplements over the Atlaskit bundle', () => {
    const messages = getAtlaskitMessages('de')
    expect(messages['fabric.editor.bold']).toEqual('Fett')
    expect(messages['fabric.editor.linkPlaceholder']).toEqual('Link einfügen')
    expect(getAtlaskitMessages('fr')['fabric.editor.linkPlaceholder']).toEqual(
      'Coller le lien'
    )
  })

  it('falls back to English for a locale the Atlaskit bundle lacks', () => {
    const messages = getAtlaskitMessages('es')
    expect(messages['fabric.editor.bold']).toEqual('Bold')
    expect(messages['fabric.editor.linkPlaceholder']).toEqual('Pegar enlace')
  })

  it('falls back to the English messages for an unknown locale', () => {
    expect(getAtlaskitMessages('made-up-locale')).toEqual(
      getAtlaskitMessages('en')
    )
  })
})

describe('getReactIntlLocaleData', () => {
  it('returns locale data for every supported locale', () => {
    expect(getReactIntlLocaleData()).toHaveLength(supportedLocales.length)
  })
})
