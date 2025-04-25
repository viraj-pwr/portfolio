import React, { useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Menu, X, BarChart2 } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center" onClick={() => handleNavigation('/')}>
            <div className="flex items-center space-x-2 cursor-pointer">
              <BarChart2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Viraj Pawar
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink title="Home" isActive={isActive('/')} onClick={() => handleNavigation('/')} />
            <NavLink title="Experience" isActive={isActive('/experience')} onClick={() => handleNavigation('/experience')} />
            <NavLink title="Projects" isActive={isActive('/projects')} onClick={() => handleNavigation('/projects')} />
            <NavLink title="Blog" isActive={isActive('/blog')} onClick={() => handleNavigation('/blog')} />
            <NavLink title="About" isActive={isActive('/about')} onClick={() => handleNavigation('/about')} />
            <NavLink title="Contact" isActive={isActive('/contact')} onClick={() => handleNavigation('/contact')} />
            
            {/* Theme toggle */}
            <ThemeToggle />
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="ml-4 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink title="Home" isActive={isActive('/')} onClick={() => handleNavigation('/')} />
            <MobileNavLink title="Experience" isActive={isActive('/experience')} onClick={() => handleNavigation('/experience')} />
            <MobileNavLink title="Projects" isActive={isActive('/projects')} onClick={() => handleNavigation('/projects')} />
            <MobileNavLink title="Blog" isActive={isActive('/blog')} onClick={() => handleNavigation('/blog')} />
            <MobileNavLink title="About" isActive={isActive('/about')} onClick={() => handleNavigation('/about')} />
            <MobileNavLink title="Contact" isActive={isActive('/contact')} onClick={() => handleNavigation('/contact')} />
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
    className={`text-sm font-medium transition-colors ${
      isActive
        ? 'text-blue-600 dark:text-blue-400'
        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
    }`}
  >
    {title}
  </button>
);

const MobileNavLink: React.FC<NavLinkProps> = ({ title, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
      isActive
        ? 'text-blue-600 dark:text-blue-400 bg-gray-50 dark:bg-gray-800'
        : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800'
    }`}
  >
    {title}
  </button>
);

export default Navbar;