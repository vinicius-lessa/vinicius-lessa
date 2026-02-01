import { ref, computed } from "vue";
import ptBR from "../i18n/locales/pt-BR.js";
import en from "../i18n/locales/en.js";

const currentLocale = ref("pt-BR");

const locales = {
  "pt-BR": ptBR,
  en: en,
};

export function useLanguage() {
  const setLocale = (locale) => {
    if (locales[locale]) {
      currentLocale.value = locale;
      localStorage.setItem("locale", locale);
    }
  };

  const text = (key, params = {}) => {
    const keys = key.split(".");
    let value = locales[currentLocale.value];

    for (const k of keys) {
      value = value?.[k];
    }

    if (typeof value === 'string' && params && Object.keys(params).length > 0) {
        // Substitui placeholders como {profession} pelos valores dos parâmetros
        return value.replace(/{(\w+)}/g, (match, paramName) => {
        return params[paramName] || match;
        });
    }

    return value || key;
  };

  const locale = computed(() => currentLocale.value);

  // Inicializar com idioma salvo ou padrão
  const savedLocale = localStorage.getItem("locale");
  if (savedLocale && locales[savedLocale]) {
    currentLocale.value = savedLocale;
  }

  return {
    locale,
    setLocale,
    text,
  };
}
