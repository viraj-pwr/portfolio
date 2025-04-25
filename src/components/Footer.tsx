import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import MediumIcon from './icons/MediumIcon';

type FooterProps = {
  navigateTo: (page: string) => void;
};

const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Viraj Pawar</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Data scientist passionate about transforming complex data into meaningful insights and building impactful solutions.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Github size={20} />} href="https://github.com/virajpawar" ariaLabel="GitHub" />
              <SocialIcon icon={<Linkedin size={20} />} href="https://linkedin.com/in/virajpawar" ariaLabel="LinkedIn" />
              <SocialIcon icon={<MediumIcon size={20} />} href="https://medium.com/@virajpawar" ariaLabel="Medium" />
              <SocialIcon icon={<Mail size={20} />} href="mailto:contact@virajpawar.com" ariaLabel="Email" />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink text="Home" onClick={() => navigateTo('home')} />
              <FooterLink text="Experience" onClick={() => navigateTo('experience')} />
              <FooterLink text="Projects" onClick={() => navigateTo('projects')} />
              <FooterLink text="Blog" onClick={() => navigateTo('blog')} />
              <FooterLink text="About" onClick={() => navigateTo('about')} />
              <FooterLink text="Contact" onClick={() => navigateTo('contact')} />
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600 dark:text-gray-400">
              <li>Ireland</li>
              <li>contact@databyviraj.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} Viraj Pawar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

type SocialIconProps = {
  icon: React.ReactNode;
  href: string;
  ariaLabel: string;
};

const SocialIcon: React.FC<SocialIconProps> = ({ icon, href, ariaLabel }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    aria-label={ariaLabel}
  >
    {icon}
  </a>
);

type FooterLinkProps = {
  text: string;
  onClick: () => void;
};

const FooterLink: React.FC<FooterLinkProps> = ({ text, onClick }) => (
  <li>
    <button
      onClick={onClick}
      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      {text}
    </button>
  </li>
);

export default Footer;