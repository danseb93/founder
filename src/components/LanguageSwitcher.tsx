import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="fixed top-6 right-6 z-50 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full text-white hover:border-accent-cyan hover:text-accent-cyan transition-all duration-300 font-mono text-sm"
            aria-label="Toggle Language"
        >
            {i18n.language === 'en' ? 'ES' : 'EN'}
        </button>
    );
};

export default LanguageSwitcher;
