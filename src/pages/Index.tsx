import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Quote } from 'lucide-react';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact Us', href: '#contact' }
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
      scope: 'Installation of HDPE geomembrane lining for 50,000L capacity water treatment pond including welding and quality testing.',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=600&h=400&fit=crop',
      status: 'Completed'
    },
    {
      id: 2,
      title: 'Industrial Waste Containment',
      client: 'ABC Manufacturing Ltd.',
      location: 'Pune, Maharashtra', 
      timeline: 'August 2022 - October 2022',
      scope: 'Design and installation of multi-layer geomembrane system for industrial waste containment with geotextile underlayment.',
      image: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&h=400&fit=crop',
      status: 'Completed'
    },
    {
      id: 3,
      title: 'Agricultural Pond Lining',
      client: 'Green Valley Farms',
      location: 'Nashik, Maharashtra',
      timeline: 'May 2023 - June 2023', 
      scope: 'Installation of geomembrane lining for irrigation pond including anchor trenching and protective layer installation.',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop',
      status: 'Completed'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-900">QAAM Enterprises</h1>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </a>
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
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-900 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-blue-700">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1920&h=1080&fit=crop)'
          }}
        ></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-6xl md:text-8xl font-bold mb-4">QAAM Enterprises</h1>
          <p className="text-2xl md:text-3xl font-light">Since 2009</p>
          <p className="text-lg md:text-xl mt-4 max-w-2xl mx-auto">
            Leading provider of geomembrane and geotextile installation services
          </p>
        </div>
      </section>

      {/* Word from CEO Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Word from the CEO</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 rounded-lg p-8 md:p-12 relative">
              <Quote className="absolute top-6 left-6 text-blue-900 opacity-20" size={48} />
              
              <div className="text-center mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                  alt="CEO"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-2xl font-bold text-blue-900 mb-1">Rajesh Kumar</h3>
                <p className="text-blue-700 font-medium">Chief Executive Officer</p>
              </div>

              <blockquote className="text-lg text-gray-700 italic leading-relaxed text-center">
                "Since founding QAAM Enterprises in 2009, our mission has been to provide unparalleled geomembrane and geotextile solutions that protect our environment and serve our communities. With over 15 years of experience, we have successfully completed hundreds of projects across Maharashtra and beyond. Our commitment to quality, innovation, and environmental stewardship drives everything we do. We take pride in our skilled team, cutting-edge technology, and unwavering dedication to client satisfaction. As we look to the future, QAAM Enterprises remains committed to being your trusted partner in environmental containment solutions."
              </blockquote>

              <div className="mt-8 text-center">
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
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional installation and consulting services for environmental containment solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing our expertise through successful project implementations
            </p>
          </div>

          <div className="space-y-12">
            {projects.map((project) => (
              <div key={project.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-lg">
                <div className="md:flex">
                  <div className="md:w-1/2">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-1/2 p-8">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{project.title}</h3>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.status}
                      </span>
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="font-semibold text-blue-900">Client: </span>
                        <span className="text-gray-700">{project.client}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-blue-900">Location: </span>
                        <span className="text-gray-700">{project.location}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-blue-900">Timeline: </span>
                        <span className="text-gray-700">{project.timeline}</span>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-2">Project Scope:</h4>
                      <p className="text-gray-700">{project.scope}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Get in touch with us for your geomembrane and geotextile installation needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-blue-800 rounded-lg p-8">
              <Phone className="mx-auto mb-4 text-blue-200" size={48} />
              <h3 className="text-xl font-semibold mb-4">Phone</h3>
              <p className="text-blue-100">+91 98765 43210</p>
              <p className="text-blue-100">+91 87654 32109</p>
            </div>

            <div className="bg-blue-800 rounded-lg p-8">
              <Mail className="mx-auto mb-4 text-blue-200" size={48} />
              <h3 className="text-xl font-semibold mb-4">Email</h3>
              <p className="text-blue-100">info@qaamenterprises.com</p>
              <p className="text-blue-100">projects@qaamenterprises.com</p>
            </div>

            <div className="bg-blue-800 rounded-lg p-8">
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">QAAM Enterprises</h3>
              <p className="text-gray-300">
                Since 2009, providing professional geomembrane and geotextile installation services with excellence and reliability.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2 text-gray-300">
                <p>Phone: +91 98765 43210</p>
                <p>Email: info@qaamenterprises.com</p>
                <p>Office: 123 Industrial Area, Sector 15, Mumbai</p>
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
    </div>
  );
};

export default HomePage;
