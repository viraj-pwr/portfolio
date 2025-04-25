import React from 'react';
import { Book, Briefcase, Award, Github, Linkedin, Mail } from 'lucide-react';
import MediumIcon from '../components/icons/MediumIcon';
import profileImage from '../assets/profile.jpg';
const About: React.FC = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:mb-24">
          <div className="md:flex md:items-center md:gap-12">
            {/* Profile image */}
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900">
              
              <img 
                src={profileImage}
                alt="Viraj Pawar" 
                className="w-full h-full object-cover"
              />
              </div>
            </div>
            
            {/* Intro text */}
            <div className="md:w-2/3 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Hello, I'm Viraj Pawar
                </span>
              </h1>
              
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                Data Scientist & Machine Learning Engineer
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                I'm passionate about leveraging data to solve real-world problems. With expertise in machine learning, 
                statistical analysis, and data visualization, I help organizations make data-driven decisions and 
                build intelligent systems.
              </p>
              
              {/* Social links */}
              <div className="flex justify-center md:justify-start space-x-4">
                <SocialLink 
                  icon={<Github size={20} />} 
                  href="https://github.com/virajpawar" 
                  label="GitHub"
                />
                <SocialLink 
                  icon={<Linkedin size={20} />} 
                  href="https://linkedin.com/in/virajpawar" 
                  label="LinkedIn"
                />
                <SocialLink 
                  icon={<MediumIcon size={20} />} 
                  href="https://medium.com/@virajpawar" 
                  label="Medium"
                />
                <SocialLink 
                  icon={<Mail size={20} />} 
                  href="mailto:contact@virajpawar.com" 
                  label="Email"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Education */}
          <AboutSection
            icon={<Book className="h-6 w-6" />}
            title="Education"
            items={[
              {
                title: "MSc. in Artificial Intelligence",
                subtitle: "University of Galway",
                period: "2024 - 2026"
              },
              {
                title: "MSc. in Data Analytics",
                subtitle: "National College of Ireland",
                period: "2016 - 2017"
              },
              {
              title: "Bachelor of Engineering in Electronics and Telecommunication",
              subtitle: "University of Mumbai",
              period: "2006 - 2010"
            }
            ]}
          />
          
          {/* Experience */}
          <AboutSection
            icon={<Briefcase className="h-6 w-6" />}
            title="Experience"
            items={[
              {
                title: "Senior Data Scientist",
                subtitle: "TechCorp Inc.",
                period: "2021 - Present"
              },
              {
                title: "Machine Learning Engineer",
                subtitle: "DataViz Solutions",
                period: "2019 - 2021"
              }
            ]}
          />
          
          {/* Certifications */}
          <AboutSection
            icon={<Award className="h-6 w-6" />}
            title="Certifications"
            items={[
              {
                title: "AWS Certified Machine Learning",
                subtitle: "Amazon Web Services",
                period: "2022"
              },
              {
                title: "TensorFlow Developer Certificate",
                subtitle: "Google",
                period: "2020"
              }
            ]}
          />
        </div>

        {/* Bio section */}
        <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-md border border-gray-200 dark:border-gray-800 mb-16">
          <h2 className="text-2xl font-bold mb-6">About Me</h2>
          
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p>
              I'm a data scientist with over 5 years of experience working with machine learning, statistical analysis, 
              and data visualization. My journey in data science began during my undergraduate studies at UC Berkeley, 
              where I discovered my passion for extracting meaningful insights from complex datasets.
            </p>
            
            <p>
              After completing my master's degree at Stanford, I joined DataViz Solutions where I developed machine 
              learning models for financial forecasting and customer segmentation. Currently, at TechCorp Inc., 
              I lead a team of data scientists working on cutting-edge AI solutions for healthcare.
            </p>
            
            <p>
              My technical expertise includes Python, R, TensorFlow, PyTorch, and SQL, along with big data technologies 
              like Spark and Hadoop. I'm particularly interested in natural language processing and its applications in 
              improving human-computer interaction.
            </p>
            
            <p>
              Outside of work, I enjoy hiking, playing chess, and contributing to open-source projects. I'm also an avid 
              blogger, sharing my knowledge about data science and machine learning through tutorials and case studies.
            </p>
          </div>
        </div>

        {/* Skills section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SkillsCategory 
              title="Data Analysis & Visualization"
              skills={[
                { name: "Statistical Analysis", level: 95 },
                { name: "Data Cleaning & Preprocessing", level: 90 },
                { name: "Pandas & NumPy", level: 95 },
                { name: "Tableau", level: 85 },
                { name: "Matplotlib & Seaborn", level: 90 }
              ]}
            />
            
            <SkillsCategory 
              title="Machine Learning"
              skills={[
                { name: "Supervised Learning", level: 90 },
                { name: "Deep Learning", level: 85 },
                { name: "Natural Language Processing", level: 85 },
                { name: "Time Series Analysis", level: 80 },
                { name: "Computer Vision", level: 75 }
              ]}
            />
            
            <SkillsCategory 
              title="Programming Languages"
              skills={[
                { name: "Python", level: 95 },
                { name: "R", level: 85 },
                { name: "SQL", level: 90 },
                { name: "JavaScript", level: 75 },
                { name: "Java", level: 70 }
              ]}
            />
            
            <SkillsCategory 
              title="Tools & Technologies"
              skills={[
                { name: "TensorFlow & PyTorch", level: 85 },
                { name: "Scikit-learn", level: 90 },
                { name: "Git & Version Control", level: 85 },
                { name: "Docker & Kubernetes", level: 80 },
                { name: "AWS & Cloud Computing", level: 85 }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

type SocialLinkProps = {
  icon: React.ReactNode;
  href: string;
  label: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

type AboutSectionProps = {
  icon: React.ReactNode;
  title: string;
  items: {
    title: string;
    subtitle: string;
    period: string;
  }[];
};

const AboutSection: React.FC<AboutSectionProps> = ({ icon, title, items }) => (
  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-800">
    <div className="flex items-center mb-4">
      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-3">
        <div className="text-blue-600 dark:text-blue-400">
          {icon}
        </div>
      </div>
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
    
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border-l-2 border-gray-200 dark:border-gray-700 pl-4 py-1">
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{item.subtitle}</p>
          <p className="text-gray-500 dark:text-gray-500 text-xs">{item.period}</p>
        </div>
      ))}
    </div>
  </div>
);

type SkillsCategoryProps = {
  title: string;
  skills: {
    name: string;
    level: number;
  }[];
};

const SkillsCategory: React.FC<SkillsCategoryProps> = ({ title, skills }) => (
  <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-800">
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    
    <div className="space-y-3">
      {skills.map((skill, index) => (
        <div key={index}>
          <div className="flex justify-between mb-1">
            <span className="text-sm text-gray-700 dark:text-gray-300">{skill.name}</span>
            <span className="text-xs text-gray-500 dark:text-gray-500">{skill.level}%</span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default About;