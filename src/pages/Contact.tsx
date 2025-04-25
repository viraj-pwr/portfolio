import React, { useState, useRef, useEffect } from 'react';
import { MapPin, Mail, Phone, Send, Github, Linkedin } from 'lucide-react';
import MediumIcon from '../components/icons/MediumIcon';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  useEffect(() => {
    // Initialize EmailJS with your public key
    emailjs.init('zKTb0xXt7bo2UPPll');
  }, []);

  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState<{
    submitted: boolean;
    success: boolean;
    message: string;
  } | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      console.log('Form data being sent:', formData);
      console.log('Form ref current:', formRef.current);
      
      const result = await emailjs.sendForm(
        'service_u5bnlk4',
        'template_950o88g',
        formRef.current!,
        'zKTb0xXt7bo2UPPll'
      );

      console.log('EmailJS response:', result);

      if (result.text === 'OK') {
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Your message has been sent successfully! I will get back to you soon.'
        });
        
        // Clear form after successful submission
        setFormData({
          user_name: '',
          user_email: '',
          subject: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Email sending error details:', {
        error,
        formData,
        serviceId: 'service_u5bnlk4',
        templateId: 'template_950o88g'
      });
      
      setFormStatus({
        submitted: true,
        success: false,
        message: error instanceof Error 
          ? `Error: ${error.message}` 
          : 'Failed to send message. Please try again later or contact me directly via email.'
      });
    } finally {
      setIsSubmitting(false);
      
      // Reset form status after 5 seconds
      setTimeout(() => {
        setFormStatus(null);
      }, 5000);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 md:mb-16 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or just want to connect? Feel free to reach out.
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Contact information */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <ContactInfoItem 
                  icon={<MapPin className="h-5 w-5" />}
                  title="Location"
                  detail="Ireland"
                />
                
                <ContactInfoItem 
                  icon={<Mail className="h-5 w-5" />}
                  title="Email"
                  detail="contact@databyviraj.com"
                  isLink
                  href="mailto:contact@databyviraj.com"
                />
                
                <ContactInfoItem 
                  icon={<Phone className="h-5 w-5" />}
                  title="Phone"
                  detail="+353 832082399 / +44 7938076208"
                  isLink
                  href="tel:+353832082399"
                />
              </div>
              
              {/* Social links */}
              <div className="mt-8">
                <h3 className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Connect with me</h3>
                <div className="flex space-x-4">
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
                </div>
              </div>
            </div>
            
            {/* Office hours */}
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-800">
              <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM IST</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span>By appointment</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact form */}
          <div className="md:col-span-3">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md border border-gray-200 dark:border-gray-800">
              <h2 className="text-xl font-bold mb-6">Send Me a Message</h2>
              
              {formStatus && (
                <div className={`mb-6 p-4 rounded-lg ${formStatus.success ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200' : 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200'}`}>
                  {formStatus.message}
                </div>
              )}
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      value={formData.user_name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      value={formData.user_email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </div>
                
                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="project">Project Inquiry</option>
                    <option value="job">Job Opportunity</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  ></textarea>
                </div>
                
                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

type ContactInfoItemProps = {
  icon: React.ReactNode;
  title: string;
  detail: string;
  isLink?: boolean;
  href?: string;
};

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({ icon, title, detail, isLink = false, href }) => (
  <div className="flex items-start">
    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mr-3">
      <div className="text-blue-600 dark:text-blue-400">
        {icon}
      </div>
    </div>
    <div>
      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</h3>
      {isLink && href ? (
        <a 
          href={href} 
          className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {detail}
        </a>
      ) : (
        <p className="text-gray-700 dark:text-gray-300">{detail}</p>
      )}
    </div>
  </div>
);

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
    className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Contact;