import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLang);
    };

    return (
        <div className="fixed top-6 right-6 z-50">
            <button
                onClick={toggleLanguage}
                className="bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 rounded-full text-white hover:border-accent-cyan transition-all duration-300 font-mono text-sm flex items-center gap-2 group"
                aria-label={`Switch to ${i18n.language === 'en' ? 'Spanish' : 'English'}`}
            >
                {/* Globe icon */}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
                
                {/* Language options */}
                <div className="flex items-center gap-1">
                    <span className={i18n.language === 'en' ? 'text-accent-cyan font-bold' : 'text-gray-400'}>
                        EN
                    </span>
                    <span className="text-gray-500">|</span>
                    <span className={i18n.language === 'es' ? 'text-accent-cyan font-bold' : 'text-gray-400'}>
                        ES
                    </span>
                </div>
            </button>
        </div>
    );
};

export default LanguageSwitcher;
