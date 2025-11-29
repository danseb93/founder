import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { projects, type Project } from '../data/profile';
import Card from './Card';
import Modal from './Modal';

const ProjectMap: React.FC = () => {
    const { t, i18n } = useTranslation();
    const industries = ['All', 'Logistics', 'Fintech', 'Retail', 'Health'];
    const [activeIndustry, setActiveIndustry] = useState('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = activeIndustry === 'All'
        ? projects
        : projects.filter(proj => proj.industry === activeIndustry);

    // Helper function to truncate text
    const truncateText = (text: string, maxLength: number = 120): string => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + '...';
    };

    return (
        <section className="py-20" id="projects">
            <div className="container">
                <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">
                    <span className="text-gradient">{t('projects.title')}</span>
                </h2>

                <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
                    {t('projects.subtitle')}
                </p>

                {/* Industry Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16">
                    {industries.map(industry => (
                        <button
                            key={industry}
                            onClick={() => setActiveIndustry(industry)}
                            className={`
                px-6 py-2 rounded-full border transition-all duration-300
                ${activeIndustry === industry
                                    ? 'bg-accent-cyan/20 border-accent-cyan text-accent-cyan shadow-[0_0_15px_rgba(0,243,255,0.3)]'
                                    : 'bg-transparent border-white/10 text-gray-400 hover:border-white/30 hover:text-white'}
              `}
                        >
                            {industry === 'All' ? t('projects.all') : industry}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project) => {
                        const description = i18n.language === 'es' ? project.descriptionEs : project.description;

                        return (
                            <article
                                key={project.id}
                                className="cursor-pointer group"
                                onClick={() => setSelectedProject(project)}
                            >
                                <Card hoverEffect className="h-full flex flex-col">
                                    <div className="flex justify-between items-start mb-4">
                                        <span className="text-xs font-mono text-accent-cyan border border-accent-cyan/30 px-2 py-1 rounded">
                                            {project.industry}
                                        </span>
                                        <span className="text-xs text-gray-500">{project.company}</span>
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-cyan transition-colors">
                                        {project.name}
                                    </h3>

                                    <h4 className="text-sm text-gray-400 mb-4">{project.role}</h4>

                                    <p className="text-gray-400 text-sm mb-6 flex-grow">
                                        {truncateText(description, 120)}
                                    </p>

                                    <div className="space-y-4 mt-auto">
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.slice(0, 4).map(tech => (
                                                <span key={tech} className="text-xs bg-white/5 text-gray-400 px-2 py-1 rounded">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 4 && (
                                                <span className="text-xs text-gray-500 px-2 py-1">+{project.technologies.length - 4}</span>
                                            )}
                                        </div>

                                        {project.url && (
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="inline-flex items-center text-sm text-accent-cyan hover:underline"
                                            >
                                                {t('projects.viewProject')}
                                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </Card>
                            </article>
                        );
                    })}
                </div>
            </div>

            {/* Modal Details */}
            <Modal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                title={selectedProject?.name}
            >
                {selectedProject && (
                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row justify-between items-start border-b border-white/10 pb-4">
                            <div>
                                <h4 className="text-xl font-bold text-accent-cyan">{selectedProject.company}</h4>
                                <p className="text-gray-400">{selectedProject.role}</p>
                            </div>
                            {selectedProject.url && (
                                <a
                                    href={selectedProject.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-sm text-accent-cyan hover:underline mt-2 md:mt-0"
                                >
                                    {t('projects.viewProject')}
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            )}
                        </div>

                        <div>
                            <h5 className="text-lg font-bold text-white mb-3">{t('modal.description')}</h5>
                            <p className="text-gray-300 leading-relaxed">
                                {i18n.language === 'es' ? selectedProject.descriptionEs : selectedProject.description}
                            </p>
                        </div>

                        <div>
                            <h5 className="text-lg font-bold text-white mb-3">{t('modal.achievements')}</h5>
                            <ul className="space-y-2">
                                {(i18n.language === 'es' ? selectedProject.achievementsEs : selectedProject.achievements).map((achievement, idx) => (
                                    <li key={idx} className="flex items-start text-gray-300">
                                        <span className="text-accent-purple mr-2 mt-1">▹</span>
                                        <span>{achievement}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h5 className="text-lg font-bold text-white mb-3">{t('modal.techStack')}</h5>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.technologies.map(tech => (
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

export default ProjectMap;
