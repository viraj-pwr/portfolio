import React from 'react';

interface MediumIconProps {
  size?: number;
  className?: string;
}

const MediumIcon: React.FC<MediumIconProps> = ({ size = 24, className = '' }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2.5 2.5h19v19h-19z" />
      <path d="M7 7l10 10" />
      <path d="M7 17l10-10" />
    </svg>
  );
};

export default MediumIcon; 