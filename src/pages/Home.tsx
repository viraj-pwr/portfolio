import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown, Database, LineChart, GitBranch, Cpu } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import profileImage from '../assets/profile.jpg';

const Home: React.FC = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 md:pt-36 pb-16 md:pb-24 flex flex-col items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <div className="relative w-36 h-36 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto rounded-full overflow-hidden border-4 border-blue-100 dark:border-blue-900">
              <img 
                src={profileImage}
                alt="Viraj Pawar" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Data Scientist & Data Analyst 
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Transforming complex data into meaningful insights and building AI solutions that make a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/about')}
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
            >
              About Me
            </button>
            <button 
              onClick={() => {
                document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium transition-colors"
            >
              View My Work
            </button>
          </div>
        </div>
        
        <div className="mt-20 animate-bounce">
          <button 
            onClick={() => {
              document.getElementById('featured-projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="h-8 w-8" />
          </button>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="py-16 md:py-24 bg-gray-100 dark:bg-gray-800/50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Explore some of my recent data science and machine learning projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturedProject 
              icon={<LineChart className="h-10 w-10 text-purple-500" />}
              title="Sales Forecasting Model"
              description="Developed a time-series forecasting model that predicts sales with 94% accuracy, saving the client an estimated $2M annually."
              tags={['Time Series', 'Python', 'Prophet', 'Pandas']}
              isDark={isDarkMode}
            />
            <FeaturedProject 
              icon={<Database className="h-10 w-10 text-blue-500" />}
              title="Customer Segmentation"
              description="Created an unsupervised learning model to identify distinct customer segments for targeted marketing campaigns."
              tags={['Clustering', 'Python', 'Scikit-learn', 'Matplotlib']}
              isDark={isDarkMode}
            />
            <FeaturedProject 
              icon={<GitBranch className="h-10 w-10 text-green-500" />}
              title="NLP Sentiment Analysis"
              description="Built a sentiment analysis pipeline for customer reviews using state-of-the-art NLP techniques."
              tags={['NLP', 'PyTorch', 'Transformers', 'BERT']}
              isDark={isDarkMode}
            />
          </div>
          
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/projects')}
              className="px-6 py-3 rounded-lg border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-500 dark:hover:text-white font-medium transition-colors"
            >
              View All Projects
            </button>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Expertise</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Specialized skills and technologies I work with
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard 
              icon={<Database className="h-8 w-8" />}
              title="Data Analysis"
              skills={['Statistical Analysis', 'Data Visualization', 'SQL', 'Pandas', 'Power BI', 'Smartsheet', 'Google Sheets', 'Looker Studio']}
            />
            <SkillCard 
              icon={<LineChart className="h-8 w-8" />}
              title="Machine Learning"
              skills={['Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'NLP', 'Convolutional Neural Networks', 'Knowledge Graphs']}
            />
            <SkillCard 
              icon={<Cpu className="h-8 w-8" />}
              title="Tools & Technologies"
              skills={['Python', 'R', 'PyTorch', 'Scikit-learn', 'Kubernetes', 'Docker', 'Google Apps Script']}
            />
            <SkillCard 
              icon={<GitBranch className="h-8 w-8" />}
              title="Software Development"
              skills={['Git', 'CI/CD', 'RESTful APIs', 'Microservices', 'Production ML Systems', 'Microsoft Azure DevOps', 'MLOps', 'serverless Architecture']}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's work together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm currently available for freelance projects, full-time positions, and consulting opportunities.
          </p>
          <button
            onClick={() => navigate('/contact')}
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
};

type FeaturedProjectProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  isDark: boolean;
};

const FeaturedProject: React.FC<FeaturedProjectProps> = ({ icon, title, description, tags, isDark }) => (
  <div className="group relative overflow-hidden bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-200 dark:border-gray-700 hover:border-blue-200 dark:hover:border-blue-900">
    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-r from-blue-200 to-indigo-200 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-full -mr-20 -mt-20 opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="relative">
      <div className="mb-4">
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-xs px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  skills: string[];
};

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => (
  <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700">
    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full w-fit mb-4">
      <div className="text-blue-600 dark:text-blue-400">
        {icon}
      </div>
    </div>
    
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-gray-600 dark:text-gray-400 text-sm">
          • {skill}
        </li>
      ))}
    </ul>
  </div>
);

export default Home;