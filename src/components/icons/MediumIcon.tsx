import React from 'react';
import { UilMediumM } from '@iconscout/react-unicons';

interface MediumIconProps {
  size?: number;
  className?: string;
}

const MediumIcon: React.FC<MediumIconProps> = ({ size = 24, className = '' }) => {
  return <UilMediumM size={size} className={className} />;
};

export default MediumIcon; 