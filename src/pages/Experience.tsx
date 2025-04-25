import React from 'react';
import { experienceData } from '../utils/data';

const Experience: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey in Data Science, Machine learning, Data Analytics and Engineering.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-6 bottom-6 w-px bg-blue-200 dark:bg-blue-900"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {experienceData.map((job, index) => (
              <TimelineItem key={index} job={job} isFirst={index === 0} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

type TimelineItemProps = {
  job: {
    company: string;
    position: string;
    period: string;
    description: string;
    responsibilities: string[];
    technologies: string[];
    logo: string;
  };
  isFirst: boolean;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ job, isFirst }) => {
  return (
    <div className="relative pl-16 md:pl-20">
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 transform -translate-y-1/2">
        <div className="w-12 md:w-16 h-12 md:h-16 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-4 border-blue-400 dark:border-blue-600">
            <div className={`h-2 w-2 rounded-full ${isFirst ? 'bg-blue-600' : 'bg-blue-400 dark:bg-blue-700'}`}></div>
          </div>
        </div>
      </div>

      {/* Content card */}
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-800 hover:border-blue-200 dark:hover:border-blue-900 transition-all duration-300 hover:shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
          {/* Company logo */}
          <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
            <img src={job.logo} alt={`${job.company} logo`} className="w-10 h-10 object-contain" />
          </div>
          
          {/* Position info */}
          <div className="flex-grow">
            <h3 className="text-xl font-bold">{job.position}</h3>
            <div className="flex flex-col md:flex-row md:items-center md:gap-2">
              <span className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</span>
              <span className="hidden md:inline text-gray-400">•</span>
              <span className="text-gray-500 dark:text-gray-400">{job.period}</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-4">{job.description}</p>
        
        {/* Responsibilities */}
        <div className="mb-6">
          <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Responsibilities</h4>
          <ul className="space-y-2">
            {job.responsibilities.map((responsibility, i) => (
              <li key={i} className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span className="text-gray-600 dark:text-gray-400">{responsibility}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Technologies */}
        <div>
          <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3">Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {job.technologies.map((tech, i) => (
              <span 
                key={i} 
                className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;