import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, GanttChart as ChartNoAxesGantt } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type NavbarProps = {
  currentPage: string;
  navigateTo: (page: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ currentPage, navigateTo }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  // Check if page is scrolled for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when navigation occurs
  const handleNavigation = (page: string) => {
    navigateTo(page);
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center" onClick={() => handleNavigation('home')}>
            <div className="flex items-center space-x-2 cursor-pointer">
              <ChartNoAxesGantt className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Viraj Pawar
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              title="Home" 
              isActive={currentPage === 'home'} 
              onClick={() => handleNavigation('home')} 
            />
            <NavLink 
              title="Experience" 
              isActive={currentPage === 'experience'} 
              onClick={() => handleNavigation('experience')} 
            />
            <NavLink 
              title="Projects" 
              isActive={currentPage === 'projects'} 
              onClick={() => handleNavigation('projects')} 
            />
            <NavLink 
              title="Blog" 
              isActive={currentPage === 'blog'} 
              onClick={() => handleNavigation('blog')} 
            />
            <NavLink 
              title="About" 
              isActive={currentPage === 'about'} 
              onClick={() => handleNavigation('about')} 
            />
            <NavLink 
              title="Contact" 
              isActive={currentPage === 'contact'} 
              onClick={() => handleNavigation('contact')} 
            />
            
            {/* Theme toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-blue-900" />
              )}
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-blue-900" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink 
              title="Home" 
              isActive={currentPage === 'home'} 
              onClick={() => handleNavigation('home')} 
            />
            <MobileNavLink 
              title="Experience" 
              isActive={currentPage === 'experience'} 
              onClick={() => handleNavigation('experience')} 
            />
            <MobileNavLink 
              title="Projects" 
              isActive={currentPage === 'projects'} 
              onClick={() => handleNavigation('projects')} 
            />
            <MobileNavLink 
              title="Blog" 
              isActive={currentPage === 'blog'} 
              onClick={() => handleNavigation('blog')} 
            />
            <MobileNavLink 
              title="About" 
              isActive={currentPage === 'about'} 
              onClick={() => handleNavigation('about')} 
            />
            <MobileNavLink 
              title="Contact" 
              isActive={currentPage === 'contact'} 
              onClick={() => handleNavigation('contact')} 
            />
          </div>
        </div>
      )}
    </header>
  );
};

type NavLinkProps = {
  title: string;
  isActive: boolean;
  onClick: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ title, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`px-1 py-2 text-sm font-medium transition-all duration-300 relative ${
      isActive 
        ? 'text-blue-600 dark:text-blue-400' 
        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
    }`}
  >
    {title}
    {isActive && (
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 dark:bg-blue-400 transform origin-bottom"></span>
    )}
  </button>
);

const MobileNavLink: React.FC<NavLinkProps> = ({ title, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
      isActive 
        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400' 
        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
    }`}
  >
    {title}
  </button>
);

export default Navbar;