import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hoverEffect = false }) => {
    return (
        <div
            className={`
        bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 
        ${hoverEffect ? 'transition-all duration-300 hover:border-accent-cyan/50 hover:shadow-[0_0_20px_rgba(0,243,255,0.1)] hover:-translate-y-1' : ''}
        ${className}
      `}
            style={{
                backgroundColor: 'rgba(18, 18, 18, 0.6)',
            }}
        >
            {children}
        </div>
    );
};

export default Card;
