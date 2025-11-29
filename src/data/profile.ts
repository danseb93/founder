import experiencesData from './experiences.json';
import educationData from './education.json';
import skillsData from './skills.json';
import projectsData from './projects.json';

export interface Experience {
    id: string;
    role: string;
    roleEs?: string;
    company: string;
    companyEs?: string;
    period: string;
    periodEs?: string;
    description: string;
    descriptionEs?: string;
    technologies: string[];
    details: string[];
    detailsEs?: string[];
    color: string;
    industry: 'Logistics' | 'Fintech' | 'Software' | 'Retail' | 'Health';
}

export interface Education {
    degree: string;
    institution: string;
    year: string;
}

export interface Skills {
    frontend: Array<string | SkillWithYears>;
    backend: Array<string | SkillWithYears>;
    cms?: Array<string | SkillWithYears>;
    database: Array<string | SkillWithYears>;
    apis?: Array<string | SkillWithYears>;
    devops: Array<string | SkillWithYears>;
    versionControl?: Array<string | SkillWithYears>;
    soft: Array<string | SkillWithYears>;
}

export interface SkillWithYears {
    name: string;
    nameEs?: string;
    detail?: string;
    detailEs?: string;
    years?: number;
}

export interface Project {
    id: string;
    name: string;
    company: string;
    role: string;
    description: string;
    descriptionEs: string;
    technologies: string[];
    url: string | null;
    industry: 'Logistics' | 'Fintech' | 'Software' | 'Retail' | 'Health';
    achievements: string[];
    achievementsEs: string[];
}

export const experiences: Experience[] = experiencesData as Experience[];
export const education: Education[] = educationData as Education[];
export const skills: Skills = skillsData as Skills;
export const projects: Project[] = projectsData as Project[];
