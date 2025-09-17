import React from 'react';

interface CollapsibleSectionProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const ChevronIcon: React.FC<{isOpen: boolean}> = ({isOpen}) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-5 w-5 transition-transform duration-300 text-slate-500 ${isOpen ? 'rotate-180' : ''}`} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, isOpen, onToggle, children }) => {
  return (
    <div>
        <button
            onClick={onToggle}
            className="w-full flex items-center justify-between text-left py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 rounded"
            aria-expanded={isOpen}
            aria-controls={`sect-${title.replace(/\s+/g, '-')}`}
        >
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">{title}</h3>
            <ChevronIcon isOpen={isOpen} />
        </button>
        <div
            id={`sect-${title.replace(/\s+/g, '-')}`} 
            className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
        >
            <div className="overflow-hidden">
                <div className="pt-4">
                    {children}
                </div>
            </div>
        </div>
    </div>
  );
};

export default CollapsibleSection;