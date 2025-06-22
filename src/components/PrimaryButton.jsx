import React from 'react';

const PrimaryButton = ({ children, className = '' }) => (
    <button className={`
    relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white
    bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl
    transition-all duration-300 transform hover:scale-105 overflow-hidden group ${className}`}>
        <span className="relative z-10 flex items-center space-x-2">
            {children}
        </span>
        {/* Shimmer Effect */}
        <span
            className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent 
                 group-hover:animate-[shimmer_1s_ease-out] z-0"
        />
    </button>
);

export default PrimaryButton;