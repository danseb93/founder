import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from './Button';
import heroImage from '../assets/heroImage.png';
import heroTree from '../assets/heroTree.png';

const Hero: React.FC = () => {
    const { t, i18n } = useTranslation();

    // Function to download CV based on current language
    const downloadCV = () => {
        const filename = i18n.language === 'es' 
            ? 'CV-Daniel-Rincon-ES.pdf'
            : 'CV-Daniel-Rincon-EN.pdf';
        
        // Start download
        const link = document.createElement('a');
        link.href = `/cv/${filename}`;
        link.download = filename;
        link.click();
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Image Section (Absolute Left) */}
            <div className="absolute bottom-0 left-0 z-0 hidden lg:block h-[90vh]">
                <div className="relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-background/20 z-10"></div>
                    <img
                        src={heroImage}
                        alt="Daniel Rincón"
                        className="h-full w-auto object-contain object-bottom mask-image-gradient opacity-90"
                    />
                </div>
            </div>

            {/* Hero Tree (Absolute Right) */}
            <div className="absolute bottom-0 right-0 z-0 hidden lg:block h-[50vh] opacity-5 pointer-events-none from-transparent via-transparent to-background/20 ">
                <img
                    src={heroTree}
                    alt="Circuit Tree"
                    className="h-full w-auto object-contain object-bottom mask-image-gradient opacity-90"
                />
            </div>

            {/* Text Section (Centered) */}
            <div className="container text-center z-10 relative">
                <div className="mb-6">
                    <span className="text-accent-cyan font-mono text-lg tracking-wider animate-fade-in" style={{ animationDelay: '0.2s' }}>
                        {t('hero.greeting')}
                    </span>
                </div>

                <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                    <span className="glitch-effect block" data-text={t('hero.title')}>{t('hero.title')}</span>
                </h1>

                <h2 className="text-2xl md:text-4xl text-gray-400 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    <span className="text-gradient font-bold">{t('hero.subtitle')}</span> {t('hero.subtitleSuffix')}
                </h2>

                <p className="max-w-2xl mx-auto text-gray-400 mb-10 text-lg leading-relaxed animate-fade-in" style={{ animationDelay: '0.8s' }}>
                    {t('hero.description')}
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '1s' }}>
                    <Button variant="primary" size="lg" onClick={downloadCV}>
                        {t('hero.downloadCV')}
                    </Button>
                    <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        {t('hero.contactMe')}
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
