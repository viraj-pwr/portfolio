import React from 'react';
import { Book, Briefcase, Award, Github, Linkedin, Mail } from 'lucide-react';
import MediumIcon from '../components/icons/MediumIcon';
import profileImage from '../assets/viraj.png';
import { useNavigate } from 'react-router-dom';

const About: React.FC = () => {
  const navigate = useNavigate();

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
                Data Scientist & Data Analyst
              </p>
              
              <p className="text-gray-600 dark:text-gray-400 mb-6">
              I’m a data scientist who knows tomatoes are fruit—but I’ll never let one ruin your fruit salad. I bridge the gap between models and management, translating complex analytics into profitable action for your business.
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
                title: (
                  <a 
                    href="/src/assets/coursera.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Deep Learning Specialization
                  </a>
                ),
                subtitle: "DeepLearning.AI",
                period: "2025"
              },
              {
                title: (
                  <a 
                    href="/src/assets/dp-100.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Azure Data Scientist Associate
                  </a>
                ),
                subtitle: "Microsoft",
                period: "2020"
              },
              {
                title: (
                  <a 
                    href="/src/assets/python_certificate.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Microsoft Technology Associate: Introduction to Programming Using Python
                  </a>
                ),
                subtitle: "Microsoft",
                period: "2020"
              },
              {
                title: (
                  <a 
                    href="/src/assets/az-900.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Azure Fundamentals
                  </a>
                ),
                subtitle: "Microsoft",
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
              From designing circuits, programming microcontrollers to building machine learning models, I've always been fascinated by the intersection of technology and data. 
              With 10 years of experience in the data 
            </p>
            
            <p>
            - Data Analysis:
            Not everything in life is about minimizing an error function and building a fancy machine learning model. From my master's degrees in Data Analytics, master's degrees in Artificial Intelligence and my engineering background,  I have learned how to explore data, visualize them and extrapolate trends and patterns.
            Nothing exists as it appears and every clean dashboard is built on messy truths. That's where I come in. I don't just deliver visuals - I dig into the chaos behind them. I translate noise into narratives, detect what others overlook, and unconver the real drivers behind the data. Because inisights don't live on the surface, they hide in the nuance, the anomalies, the outliers. If you want more than pretty charts, if you want clarity, direction and data that actually drivers result - let's talk.
            </p>

 
          </div>
        </div>

        {/* Skills & Expertise Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SkillsCategory 
              title="Technical Skills"
              skills={[
                { name: "Python", level: 90 },
                { name: "Machine Learning", level: 85 },
                { name: "Data Analysis", level: 90 },
                { name: "SQL", level: 85 },
                { name: "Data Visualization", level: 80 },
                { name: "Deep Learning", level: 75 }
              ]}
            />
            
            <SkillsCategory 
              title="Tools & Technologies"
              skills={[
                { name: "TensorFlow", level: 80 },
                { name: "PyTorch", level: 75 },
                { name: "Scikit-learn", level: 85 },
                { name: "Pandas", level: 90 },
                { name: "Tableau", level: 80 },
                { name: "Git", level: 85 }
              ]}
            />
          </div>
        </div>

        {/* Contact Me Button */}
        <div className="text-center">
          <button 
            onClick={() => navigate('/contact')}
            className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
          >
            Contact Me
          </button>
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
    title: string | React.ReactNode;
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