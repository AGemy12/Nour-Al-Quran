import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from './locale/en.json';
import translationAr from './locale/ar.json';

i18n.use(initReactI18next).init({
        resources: {
            en: {
                translation: translationEn
            },
            ar: {
                translation: translationAr
            }
        },
        lng: localStorage.getItem("lng") || "en",
    });

export default i18n;