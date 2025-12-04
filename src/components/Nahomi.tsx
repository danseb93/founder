import React from 'react';
import { useTranslation } from 'react-i18next';
import nahomiImage from '../assets/nahomiImage.png';

const Nahomi: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/10 to-accent-cyan/10 -z-10"></div>

            <div className="container text-center">
                <div className="max-w-3xl mx-auto md:mx-0 md:ml-10 lg:ml-30 bg-card/30 backdrop-blur-md border border-white/10 rounded-2xl p-10 md:p-16 md:pr-48 relative text-left">
                    {/* Decorative quotes */}
                    <div className="absolute top-4 left-4 text-6xl text-accent-cyan opacity-20 font-serif">"</div>
                    <div className="absolute bottom-4 right-4 text-6xl text-accent-purple opacity-20 font-serif">"</div>

                    {/* Circular Image - Responsive positioning */}
                    {/* Mobile: Top center */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-2 border-background shadow-[0_0_15px_rgba(168,85,247,0.4)] overflow-hidden z-20 md:hidden">
                        <img
                            src={nahomiImage}
                            alt="Nahomi"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Desktop: Right side popping out */}
                    <div className="hidden md:block absolute top-1/2 -right-20 lg:-right-28 transform -translate-y-1/2 w-40 h-40 lg:w-56 lg:h-56 rounded-full border-4 border-background shadow-[0_0_20px_rgba(168,85,247,0.4)] overflow-hidden z-20">
                        <img
                            src={nahomiImage}
                            alt="Nahomi"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-8 text-white text-center md:text-left">
                        {t('nahomi.title')}
                    </h2>

                    <p className="text-xl text-gray-300 italic mb-8 leading-relaxed relative z-10 text-center md:text-left">
                        {t('nahomi.quote')}
                    </p>

                    <div className="flex justify-center md:justify-start items-center space-x-4">
                        <div className="h-1 w-12 bg-accent-cyan rounded-full"></div>
                        <span className="text-accent-purple font-bold tracking-widest uppercase text-sm">{t('nahomi.dedication')}</span>
                        <div className="h-1 w-12 bg-accent-cyan rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nahomi;
