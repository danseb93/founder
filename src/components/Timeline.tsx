import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { experiences, type Experience } from '../data/profile';
import Card from './Card';
import Modal from './Modal';

const Timeline: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

    return (
        <section className="py-20 relative" id="experience">
            <div className="container">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                    <span className="text-gradient">{t('timeline.title')}</span>
                </h2>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-accent-cyan via-accent-purple to-transparent opacity-30 hidden md:block"></div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={exp.id} className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 relative`}>

                                {/* Timeline Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent-cyan rounded-full shadow-[0_0_10px_var(--accent-cyan)] z-10 hidden md:block"></div>

                                {/* Content */}
                                <div className="w-full md:w-1/2 px-4">
                                    <article
                                        className="cursor-pointer group"
                                        onClick={() => setSelectedExp(exp)}
                                    >
                                        <Card hoverEffect className={`border-l-4 border-${exp.color.split(' ')[1].replace('to-', '')} h-full`}>
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-xl font-bold text-white group-hover:text-accent-cyan transition-colors">
                                                    {i18n.language === 'es' && exp.roleEs ? exp.roleEs : exp.role}
                                                </h3>
                                                <span className="text-sm text-gray-400 bg-white/5 px-2 py-1 rounded">
                                                    {i18n.language === 'es' && exp.periodEs ? exp.periodEs : exp.period}
                                                </span>
                                            </div>
                                            <h4 className="text-lg text-gray-300 mb-3">
                                                {i18n.language === 'es' && exp.companyEs ? exp.companyEs : exp.company}
                                            </h4>
                                            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                                {i18n.language === 'es' && exp.descriptionEs ? exp.descriptionEs : exp.description}
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.slice(0, 3).map(tech => (
                                                    <span key={tech} className="text-xs text-accent-cyan border border-accent-cyan/30 px-2 py-1 rounded-full">
                                                        {tech}
                                                    </span>
                                                ))}
                                                {exp.technologies.length > 3 && (
                                                    <span className="text-xs text-gray-500 px-2 py-1">+ {exp.technologies.length - 3} {t('timeline.more')}</span>
                                                )}
                                            </div>
                                        </Card>
                                    </article>
                                </div>

                                {/* Empty space for the other side */}
                                <div className="w-full md:w-1/2 hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal Details */}
            <Modal
                isOpen={!!selectedExp}
                onClose={() => setSelectedExp(null)}
                title={selectedExp ? (i18n.language === 'es' && selectedExp.roleEs ? selectedExp.roleEs : selectedExp.role) : ''}
            >
                {selectedExp && (
                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row justify-between items-start border-b border-white/10 pb-4">
                            <div>
                                <h4 className="text-xl font-bold text-accent-cyan">
                                    {i18n.language === 'es' && selectedExp.companyEs ? selectedExp.companyEs : selectedExp.company}
                                </h4>
                                <p className="text-gray-400">
                                    {i18n.language === 'es' && selectedExp.periodEs ? selectedExp.periodEs : selectedExp.period}
                                </p>
                            </div>
                        </div>

                        <div>
                            <h5 className="text-lg font-bold text-white mb-3">{t('modal.achievements')}</h5>
                            <ul className="space-y-2">
                                {(i18n.language === 'es' && selectedExp.detailsEs ? selectedExp.detailsEs : selectedExp.details).map((detail, idx) => (
                                    <li key={idx} className="flex items-start text-gray-300">
                                        <span className="text-accent-purple mr-2 mt-1">▹</span>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h5 className="text-lg font-bold text-white mb-3">{t('modal.techStack')}</h5>
                            <div className="flex flex-wrap gap-2">
                                {selectedExp.technologies.map(tech => (
                                    <span key={tech} className="text-sm bg-white/5 border border-white/10 px-3 py-1 rounded-full text-gray-300 hover:border-accent-cyan hover:text-accent-cyan transition-colors">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default Timeline;
