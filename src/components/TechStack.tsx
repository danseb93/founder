import React from 'react';
import { useTranslation } from 'react-i18next';
import { skills } from '../data/profile';

const TechStack: React.FC = () => {
    const { t, i18n } = useTranslation();

    const categories = [
        { key: 'frontend', title: 'Frontend', icon: '⚛️' },
        { key: 'backend', title: 'Backend', icon: '⚙️' },
        { key: 'cms', title: 'CMS', icon: '📝' },
        { key: 'database', title: 'Databases', icon: '🗄️' },
        { key: 'apis', title: 'APIs', icon: '🔌' },
        { key: 'devops', title: 'DevOps & Infrastructure', icon: '☁️' },
        { key: 'versionControl', title: 'Version Control', icon: '🔀' },
        { key: 'soft', title: 'Soft Skills', icon: '🧠' }
    ];

    const renderSkill = (skill: any) => {
        if (typeof skill === 'string') {
            return skill;
        }

        // Use Spanish name if available and language is ES
        let display = (i18n.language === 'es' && skill.nameEs) ? skill.nameEs : skill.name;

        if (skill.detail) {
            const detailText = (i18n.language === 'es' && skill.detailEs) ? skill.detailEs : skill.detail;
            display += ` (${detailText})`;
        }
        if (skill.years) {
            const yearText = i18n.language === 'es'
                ? (skill.years === 1 ? 'año' : 'años')
                : (skill.years === 1 ? 'year' : 'years');
            display += ` • ${skill.years} ${yearText}`;
        }
        return display;
    };

    return (
        <section className="py-20" id="skills">
            <div className="container">
                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                    <span className="text-gradient">{t('techStack.title')}</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => {
                        const items = (skills as any)[category.key];
                        if (!items || items.length === 0) return null;

                        return (
                            <div key={category.key} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-accent-cyan/50 transition-all duration-300">
                                <div className="flex items-center mb-4">
                                    <span className="text-3xl mr-3">{category.icon}</span>
                                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                                </div>
                                <ul className="space-y-2">
                                    {items.map((skill: any, idx: number) => (
                                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                                            <span className="text-accent-cyan mr-2 mt-1">▹</span>
                                            <span className="flex-1">{renderSkill(skill)}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
