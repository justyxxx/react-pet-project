const ruLocale = {
    'locale.navigation.title.files': 'Файлы'
}

const enLocale = {
    'locale.navigation.title.files': 'Files'
}

const parseParams = (locale, params) => {
    let newLocale = locale
    params.forEach((par, index) => {
        newLocale = newLocale.replace(`{${index}}`, par)
    })
    return newLocale
}

export const getLocale = (locale, key, ...expressions) => {
    switch (locale) {
        case 'ru': {
            return parseParams(ruLocale[key], expressions)
        }
        case 'en': {
            return parseParams(enLocale[key], expressions)
        }
    }
}
