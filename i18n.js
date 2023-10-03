import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import enTranslation from "./locales/en.json";
import svTranslation from "./locales/sv.json";

// Initialize i18n
i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: enTranslation,
        },
        sv: {
            translation: svTranslation,
        },
    },
    lng: "sv",
    fallbackLng: "sv",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;