
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, Quote, ArrowUp, Filter } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link as ScrollLink, Element } from 'react-scroll';
import LoadingScreen from '../components/LoadingScreen';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import ProjectCard from '../components/ProjectCard';
import BackToTop from '../components/BackToTop';
import ProjectTimeline from '../components/ProjectTimeline';
import { Button } from '../components/ui/button';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [projectFilter, setProjectFilter] = useState('all');

  const navigationItems = [
    { name: 'Home', href: 'home' },
    { name: 'About', href: 'about' },
    { name: 'Services', href: 'services' },
    { name: 'Projects', href: 'projects' },
    { name: 'Clients', href: 'clients' },
    { name: 'Contact Us', href: 'contact' }
  ];

  const services = [
    {
      title: 'Geomembrane Installation',
      description: 'Professional installation of high-quality geomembranes for various applications including landfills, ponds, and containment systems.',
      image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&h=300&fit=crop'
    },
    {
      title: 'Geotextile Installation', 
      description: 'Expert installation of geotextiles for soil stabilization, drainage, and filtration applications.',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop'
    },
    {
      title: 'Networking & Infrastructure',
      description: 'Comprehensive networking solutions and infrastructure development for environmental projects.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=300&fit=crop'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Municipal Water Treatment Facility',
      client: 'City Water Department',
      location: 'Mumbai, Maharashtra',
      timeline: 'January 2023 - March 2023',
      year: '2023',
      scope: 'Installation of HDPE geomembrane lining for 50,000L capacity water treatment pond including welding and quality testing.',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop',
      status: 'Completed',
      tags: ['Geomembrane', 'HDPE', 'Water Treatment'],
      type: 'Geomembrane'
    },
    {
      id: 2,
      title: 'Industrial Waste Containment',
      client: 'ABC Manufacturing Ltd.',
      location: 'Pune, Maharashtra', 
      timeline: 'August 2022 - October 2022',
      year: '2022',
      scope: 'Design and installation of multi-layer geomembrane system for industrial waste containment with geotextile underlayment.',
      image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&h=400&fit=crop',
      status: 'Completed',
      tags: ['Geomembrane', 'Geotextile', 'Industrial'],
      type: 'Geomembrane'
    },
    {
      id: 3,
      title: 'Agricultural Pond Lining',
      client: 'Green Valley Farms',
      location: 'Nashik, Maharashtra',
      timeline: 'May 2023 - June 2023',
      year: '2023',
      scope: 'Installation of geomembrane lining for irrigation pond including anchor trenching and protective layer installation.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
      status: 'Completed',
      tags: ['Geomembrane', 'Agriculture', 'Irrigation'],
      type: 'Geomembrane'
    },
    {
      id: 4,
      title: 'Highway Drainage System',
      client: 'State Highway Authority',
      location: 'Delhi NCR',
      timeline: 'March 2022 - May 2022',
      year: '2022',
      scope: 'Installation of geotextile fabric for highway drainage and soil stabilization along 15km stretch.',
      image: 'https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=600&h=400&fit=crop',
      status: 'Completed',
      tags: ['Geotextile', 'Highway', 'Drainage'],
      type: 'Geotextile'
    },
    {
      id: 5,
      title: 'Telecom Infrastructure Setup',
      client: 'Tech Networks Pvt Ltd',
      location: 'Bangalore, Karnataka',
      timeline: 'September 2023 - November 2023',
      year: '2023',
      scope: 'Complete networking infrastructure setup for telecom base stations including fiber optic installation.',
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=600&h=400&fit=crop',
      status: 'Completed',
      tags: ['Networking', 'Telecom', 'Infrastructure'],
      type: 'Networking'
    }
  ];

  const clients = [
    { name: 'City Water Department', logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=150&h=80&fit=crop' },
    { name: 'ABC Manufacturing Ltd.', logo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=80&fit=crop' },
    { name: 'Green Valley Farms', logo: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=150&h=80&fit=crop' },
    { name: 'State Highway Authority', logo: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=150&h=80&fit=crop' },
    { name: 'Tech Networks Pvt Ltd', logo: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=150&h=80&fit=crop' },
    { name: 'Municipal Corporation', logo: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?w=150&h=80&fit=crop' }
  ];

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const filteredProjects = projects.filter(project => {
    if (projectFilter === 'all') return true;
    return project.type.toLowerCase() === projectFilter.toLowerCase();
  });

  const uniqueYears = [...new Set(projects.map(p => p.year))].sort().reverse();
  const projectTypes = ['all', 'Geomembrane', 'Geotextile', 'Networking'];

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl sm:text-2xl font-bold text-blue-900">QAAM Enterprises</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-blue-900"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              {navigationItems.map((item) => (
                <ScrollLink
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  duration={500}
                  className="text-gray-700 hover:text-blue-900 block px-3 py-2 text-base font-medium cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </ScrollLink>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <Element name="home">
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1920&h=1080&fit=crop)'
            }}
          ></div>
          <div className="relative z-10 text-center text-white px-4">
            <motion.h1 
              className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              QAAM Enterprises
            </motion.h1>
            <motion.p 
              className="text-xl sm:text-2xl md:text-3xl font-light mb-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Since 2009
            </motion.p>
            <motion.p 
              className="text-base sm:text-lg md:text-xl mt-4 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Leading provider of geomembrane and geotextile installation services
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="space-x-4"
            >
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100">
                  Request a Quote
                </Button>
              </ScrollLink>
              <ScrollLink to="projects" smooth={true} duration={500}>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                  View Our Projects
                </Button>
              </ScrollLink>
            </motion.div>
          </div>
        </section>
      </Element>

      {/* About Us Section */}
      <Element name="about">
        <section className="py-12 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About QAAM Enterprises</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Our Journey Since 2009</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Founded in 2009, QAAM Enterprises has been at the forefront of geomembrane and geotextile solutions in India. What started as a vision to provide reliable environmental containment solutions has grown into a trusted name across Maharashtra and beyond.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  With over 15 years of experience, we have successfully completed hundreds of projects ranging from municipal water treatment facilities to large-scale industrial applications. Our expertise spans across geomembrane installation, geotextile systems, and networking infrastructure.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-blue-900 mb-2">Our Mission</h4>
                    <p className="text-gray-600 text-sm">To provide innovative, reliable, and sustainable environmental solutions that protect our planet while serving our communities.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-bold text-blue-900 mb-2">Our Vision</h4>
                    <p className="text-gray-600 text-sm">To be the leading provider of geomembrane and geotextile solutions across India, setting new standards in quality and innovation.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-900 text-white p-6 rounded-lg text-center">
                  <h4 className="text-3xl font-bold mb-2">15+</h4>
                  <p className="text-blue-200">Years of Experience</p>
                </div>
                <div className="bg-blue-700 text-white p-6 rounded-lg text-center">
                  <h4 className="text-3xl font-bold mb-2">500+</h4>
                  <p className="text-blue-200">Projects Completed</p>
                </div>
                <div className="bg-blue-600 text-white p-6 rounded-lg text-center">
                  <h4 className="text-3xl font-bold mb-2">10+</h4>
                  <p className="text-blue-200">States Covered</p>
                </div>
                <div className="bg-blue-800 text-white p-6 rounded-lg text-center">
                  <h4 className="text-3xl font-bold mb-2">100%</h4>
                  <p className="text-blue-200">Client Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Word from CEO Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Word from the CEO</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-lg p-6 sm:p-8 md:p-12 relative">
              <Quote className="absolute top-6 left-6 text-blue-900 opacity-20" size={48} />
              
              <div className="text-center mb-6 sm:mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                  alt="CEO"
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-1">Rajesh Kumar</h3>
                <p className="text-blue-700 font-medium">Chief Executive Officer</p>
              </div>

              <blockquote className="text-base sm:text-lg text-gray-700 italic leading-relaxed text-center">
                "Since founding QAAM Enterprises in 2009, our mission has been to provide unparalleled geomembrane and geotextile solutions that protect our environment and serve our communities. With over 15 years of experience, we have successfully completed hundreds of projects across Maharashtra and beyond. Our commitment to quality, innovation, and environmental stewardship drives everything we do. We take pride in our skilled team, cutting-edge technology, and unwavering dedication to client satisfaction. As we look to the future, QAAM Enterprises remains committed to being your trusted partner in environmental containment solutions."
              </blockquote>

              <div className="mt-6 sm:mt-8 text-center">
                <div className="inline-block">
                  <p className="text-blue-900 font-semibold text-lg">Rajesh Kumar</p>
                  <p className="text-blue-700">CEO & Founder, QAAM Enterprises</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Element name="services">
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                Professional installation and consulting services for environmental containment solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Element>

      {/* Projects Section with Filter */}
      <Element name="projects">
        <section className="py-12 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                Showcasing our expertise through successful project implementations
              </p>

              {/* Project Filters */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {projectTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setProjectFilter(type)}
                    className={`px-6 py-2 rounded-full transition-colors ${
                      projectFilter === type
                        ? 'bg-blue-900 text-white'
                        : 'bg-white text-gray-700 hover:bg-blue-100'
                    }`}
                  >
                    {type === 'all' ? 'All Projects' : type}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>

            {/* Project Timeline */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Project Timeline</h3>
              <ProjectTimeline projects={projects} />
            </div>
          </div>
        </section>
      </Element>

      {/* Clients Section */}
      <Element name="clients">
        <section className="py-12 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Trusted Clients</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
                We're proud to partner with leading organizations across various industries
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img 
                    src={client.logo} 
                    alt={client.name}
                    className="w-full h-12 object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <p className="text-xs text-center mt-2 text-gray-600">{client.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </Element>

      {/* Contact Section */}
      <Element name="contact">
        <section className="py-12 sm:py-20 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h2>
              <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
                Get in touch with us for your geomembrane and geotextile installation needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div className="bg-blue-800 rounded-lg p-6 sm:p-8">
                <Phone className="mx-auto mb-4 text-blue-200" size={48} />
                <h3 className="text-xl font-semibold mb-4">Phone</h3>
                <a href="tel:+919876543210" className="text-blue-100 hover:text-white transition-colors block">
                  +91 98765 43210
                </a>
                <a href="tel:+918765432109" className="text-blue-100 hover:text-white transition-colors block">
                  +91 87654 32109
                </a>
              </div>

              <div className="bg-blue-800 rounded-lg p-6 sm:p-8">
                <Mail className="mx-auto mb-4 text-blue-200" size={48} />
                <h3 className="text-xl font-semibold mb-4">Email</h3>
                <a href="mailto:info@qaamenterprises.com" className="text-blue-100 hover:text-white transition-colors block">
                  info@qaamenterprises.com
                </a>
                <a href="mailto:projects@qaamenterprises.com" className="text-blue-100 hover:text-white transition-colors block">
                  projects@qaamenterprises.com
                </a>
              </div>

              <div className="bg-blue-800 rounded-lg p-6 sm:p-8">
                <MapPin className="mx-auto mb-4 text-blue-200" size={48} />
                <h3 className="text-xl font-semibold mb-4">Office Location</h3>
                <p className="text-blue-100">
                  123 Industrial Area<br />
                  Sector 15, Mumbai<br />
                  Maharashtra 400001
                </p>
              </div>
            </div>
          </div>
        </section>
      </Element>

      {/* Professional Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">QAAM Enterprises</h3>
              <p className="text-gray-300 mb-4">
                Since 2009, providing professional geomembrane and geotextile installation services with excellence and reliability.
              </p>
              <div className="text-gray-300 space-y-1">
                <p className="font-semibold">Address:</p>
                <p>123 Industrial Area, Sector 15</p>
                <p>Mumbai, Maharashtra 400001</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2 text-gray-300">
                <p>Phone: +91 98765 43210</p>
                <p>Phone: +91 87654 32109</p>
                <a href="mailto:info@qaamenterprises.com" className="block hover:text-white transition-colors">
                  Email: info@qaamenterprises.com
                </a>
                <a href="mailto:projects@qaamenterprises.com" className="block hover:text-white transition-colors">
                  Projects: projects@qaamenterprises.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Geomembrane Installation</li>
                <li>Geotextile Installation</li>
                <li>Networking & Infrastructure</li>
                <li>Environmental Consulting</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © 2024 QAAM Enterprises. All rights reserved. | Established 2009
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  );
};

export default HomePage;
