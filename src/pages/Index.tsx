import { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Quote } from 'lucide-react';
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
      title: 'Geomembrane Installation - HDPE & PVC Liners',
      description:
        'Installation of HDPE and PVC geomembrane liners for ponds, canals, landfills, and tanks. Ideal for waterproofing, fish ponds, and construction lining applications.',
      image: 'https://image.made-in-china.com/2f0j00hfGRZconbjzV/ASTM-Standard-PVC-Geomembrane-for-Landfill-with-Factory-Price.webp'
    },
    {
      title: 'Geotextile Installation - Soil & Drainage Solutions',
      description:
        'Geotextile installation for soil stabilization, drainage, erosion control, canal lining, land filling, and roof gardening in civil engineering projects.',
      image: 'https://www.bpmgeosynthetics.com/wp-content/uploads/2025/06/Successful-Geotextile-Installation.jpg'
    },
    {
      title: 'Composite Membrane Installation',
      description:
        'Advanced composite membrane installation combining geotextile and geomembrane for superior waterproofing in dam lining, landfills, and containment systems.',
      image: 'https://www.bpmgeosynthetics.com/wp-content/uploads/2024/07/Reinforced-1.5mm-Composite-Geomembrane-Liner-for-Tailing-Bottom-Lining.jpg'
    },
    {
      title: 'Pond, Tank, Canal, Building & Tunnel Lining',
      description:
        'Lining solutions for fish ponds, canals, tanks, tunnels, and buildings to ensure long-term waterproofing and structural protection in construction projects.',
      image: 'https://hbbgeosales.co.uk/wp-content/uploads/2020/08/Attenuation-Pond-Liner-1-2-scaled.jpg'
    },
    {
      title: 'Internal & External Telecommunication',
      description:
        'Design and deployment of telecommunication systems, including indoor/outdoor wiring, structured cabling, and fiber routing for industrial and commercial use.',
      image: 'https://c8.alamy.com/comp/C6299T/workers-laying-a-600km-stretch-of-fibre-optic-cable-between-johannesburg-C6299T.jpg'
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'Nabisar Dam (China Hydro Water Supply Project)',
      client: 'China Hydro',
      location: 'Nabisar, Sindh',
      scope: 'Geomembrane lining installation covering 478,000 square meters as part of the water supply infrastructure.',
      image: 'data:image/jpeg;base64,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',
      status: 'Ongoing',
      tags: ['Geomembrane', 'Dam', 'Water Supply'],
      type: 'Geomembrane'
    },
    {
      id: 2,
      title: 'ARY Laguna Karachi – Mega Group',
      client: 'ARY Group',
      location: 'Karachi, Pakistan',
      scope: 'Waterproofing and geotextile installation over 850,000 square feet for ARY’s mega housing development.',
      image: 'https://www.arylaguna.com/Karachi/public/assets/Images/jan25.png',
      status: 'Completed',
      tags: ['Geotextile', 'Waterproofing', 'Residential'],
      type: 'Geotextile'
    },
    {
      id: 3,
      title: 'Makhi Farash Link Canal Project',
      client: 'Govt. of Pakistan',
      location: 'Sindh',
      scope: 'Geomembrane installation for 200 RDs of canal, totaling over 1,000,000 square meters of coverage.',
      image: 'https://i.dawn.com/primary/2025/02/67a925dd18b46.jpg',
      status: 'Completed',
      tags: ['Canal', 'Geomembrane'],
      type: 'Geomembrane'
    },
    {
      id: 4,
      title: 'Oil and Gas Development Company Limited (OGDCL)',
      client: 'OGDCL',
      location: 'Pakistan (Multiple Sites)',
      timeline: '2009 – 2024',
      year: '2009',
      scope: 'HDPE geomembrane lining services for oil & gas containment across various OGDCL sites. Total area: 604,089 sqm.',
      image: 'https://www.earthshields.com/wp-content/uploads/2021/04/Chemical-Tank-Lining-For-Oil-Storage-Tanks-In-Iraq-1.jpg',
      status: 'Completed',
      tags: ['Oil & Gas', 'Containment', 'Geomembrane'],
      type: 'Geomembrane'
    },
    {
      id: 5,
      title: 'Pakistan Petroleum Limited',
      client: 'PPL',
      location: 'Pakistan (Multiple Fields)',
      timeline: '2011 – 2018',
      year: '2011',
      scope: 'Large-scale geomembrane lining projects covering 5,143,280 square meters at various PPL oil field sites.',
      image: 'https://image.made-in-china.com/203f0j00UkMpcWECqaqf/Leakproof-2mm-HDPE-Smooth-Geomembrane-Liner-for-Oil-and-Gas-Project.webp',
      status: 'Completed',
      tags: ['PPL', 'Oilfield', 'Geomembrane'],
      type: 'Geomembrane'
    },
    {
      id: 6,
      title: 'Diamer Basha Dam Project',
      client: 'WAPDA',
      location: 'Gilgit-Baltistan, Pakistan',
      timeline: '2023',
      year: '2023',
      scope: 'Installation of geomembrane at designated areas of Diamer Basha Dam. Covered 1,500 square meters.',
      image: 'https://img.dunyanews.tv/images/userfiles/15232201_1798238990444627_6696354384736485679_n.jpg',
      status: 'Completed',
      tags: ['Dam', 'Geomembrane'],
      type: 'Geomembrane'
    },
    {
      id: 7,
      title: 'Bulleh Shah Packaging Pvt. Ltd.',
      client: 'Packages Group',
      location: 'Kasur, Punjab',
      timeline: '2017',
      year: '2017',
      scope: 'Waterproofing and lining solutions over 50,000 square feet for an industrial packaging facility.',
      image: 'https://www.packages.com.pk/wp-content/uploads/2023/03/4-730x400.jpg',
      status: 'Completed',
      tags: ['Industrial', 'Waterproofing'],
      type: 'Geotextile'
    },
    {
      id: 8,
      title: 'MOL Pakistan – Oil and Gas Site at KPK',
      client: 'MOL Pakistan',
      location: 'Khyber Pakhtunkhwa, Pakistan',
      timeline: '2014',
      year: '2014',
      scope: 'Geomembrane and composite lining installation covering 200,000 square feet for oil containment.',
      image: 'https://petroleumaustralia.com.au/wp-content/uploads/2024/08/Screenshot-2024-08-22-151304-1000x667-1.jpg',
      status: 'Completed',
      tags: ['Oil & Gas', 'Geomembrane'],
      type: 'Geomembrane'
    },
    {
      id: 9,
      title: 'LWMC Sanitary Landfill Project – Lakho Dair',
      client: 'Lahore Waste Management Company',
      location: 'Lahore, Punjab',
      timeline: '2014',
      year: '2014',
      scope: 'Geomembrane installation for sanitary landfill base layers, covering 50,000 square meters.',
      image: 'data:image/jpeg;base64,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',
      status: 'Completed',
      tags: ['Landfill', 'Waste Management'],
      type: 'Geomembrane'
    }
  ];

  const clients = [
    {
      name: 'OGDCL (Oil & Gas Development Co.)',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSd_pW0faA-sJe-6sWzSUpu54f58xlYwMHCg&s'
    },
    {
      name: 'Pakistan Petroleum Limited (PPL)',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKlFppaJQnkQaL_VMgjc_VMUkY_OfMmRRcJg&s'
    },
    {
      name: 'MOL Pakistan Oil & Gas',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqm3Lv3moOqtDHTFBp8myRl-bzxmPz0p0KbA&s'
    },
    {
      name: 'ARY Laguna (ARY Group)',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxvRF0YogQ66NnDDxxUo7VoYQjraNiYTE7yiTr7u1XJ63TpwhxeojKeGNV_mUEnmuTix0&usqp=CAU'
    },
    {
      name: 'China Hydro – Nabisar Project',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFs4C2ffHNupjoQnIDJ4IS7gCx23S1HAmUkQ&s'
    },
    {
      name: 'LWMC – Lahore Waste Management Company',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThLVX_4czsFDLgA9bAupNfVtKkFcwvYeyANg&s'
    },
    {
      name: 'WAPDA (Diamer Basha Dam)',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQCusqz2L5OzE861OGoa0qt9IzvV9VwGB4Pg&s'
    },
    {
      name: 'Packages Group – Bulleh Shah Packaging',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHJcct9i-NLdQu4yiCSapmK0U5BoK8wv3xUhZwzaKpCFXzf8DpiYiIKC62We8nhy4ZX_I&usqp=CAU'
    }
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
              backgroundImage: 'url(https://www.researchgate.net/publication/276149764/figure/fig2/AS:628780200652801@1526924290075/Geomembrane-installation-as-part-of-the-construction-of-a-base-liner-system-of-a.png)'
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
            <div className="w-full flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <ScrollLink to="contact" smooth={true} duration={500}>
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 w-64 sm:w-auto text-center">
                    Request a Quote
                  </Button>
                </ScrollLink>
                <ScrollLink to="projects" smooth={true} duration={500}>
                  <Button size="lg" className="bg-white text-blue-900 hover:bg-gray-100 w-64 sm:w-auto text-center">
                    View Our Projects
                  </Button>
                </ScrollLink>
              </motion.div>
            </div>



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
                  <strong>QAAM ENTERPRISES Inc.</strong> is proudly recognized as the pioneer in the installation of geomembrane<strong>(HDPE, LDPE, LLDPE)</strong>, geotextile, and PVC membrane systems  in Pakistan. Since 2009, we have consistently delivered cutting-edge environmental containment solutions, setting industry standards through innovation, technical expertise, and an unwavering commitment to quality and sustainability.
                </p>


                <p className="text-gray-700 mb-6 leading-relaxed">
                  Founded in 2009, QAAM Enterprises has been at the forefront of geomembrane and geotextile solutions in Pakistan. What began as a vision to provide reliable environmental containment solutions has now grown into a name recognized across major infrastructure and utility sectors. <strong>As pioneers in the field, we have led the way in delivering comprehensive supply and installation of GeoMembrane systems</strong>, shaping industry standards across the region.
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  With over 15 years of industry experience, we have successfully delivered hundreds of projects including water treatment plants, canal lining, industrial waste containment systems, and networking infrastructure installations. Our strength lies in delivering tailored, innovative solutions that adapt to each client’s unique requirements—setting us apart in the industry.
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
                  <h4 className="text-3xl font-bold mb-2">All 4</h4>
                  <p className="text-blue-200">Provinces Covered</p>
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

              {/* CEO Name & Title */}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-1">Faseeh Ahmed Khan</h3>
                <p className="text-blue-700 font-medium">Chief Executive Officer</p>
              </div>

              {/* CEO Quote */}
              <blockquote className="text-base sm:text-lg text-gray-700 italic leading-relaxed text-center">
                "Since founding QAAM Enterprises in 2009, our mission has been to provide unparalleled geomembrane and geotextile solutions that protect our environment and serve our communities. With over 15 years of experience, we have successfully completed hundreds of projects across Pakistan and beyond. Our commitment to quality, innovation, and environmental stewardship drives everything we do. We take pride in our skilled team, cutting-edge technology, and unwavering dedication to client satisfaction. As we look to the future, QAAM Enterprises remains committed to being your trusted partner in environmental containment solutions."
              </blockquote>

              {/* CEO Signature Block (Optional) */}
              <div className="mt-6 sm:mt-8 text-center">
                <div className="inline-block">
                  <p className="text-blue-900 font-semibold text-lg">Faseeh Ahmed Khan</p>
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
                    className={`px-6 py-2 rounded-full transition-colors ${projectFilter === type
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
                    className="w-full h-12 object-contain transition-all"
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
                  +92 30044 06438
                </a>

              </div>

              <div className="bg-blue-800 rounded-lg p-6 sm:p-8">
                <Mail className="mx-auto mb-4 text-blue-200" size={48} />
                <h3 className="text-xl font-semibold mb-4">Email</h3>
                <a href="mailto:qaamenterprises@outlook.com" className="block hover:text-white transition-colors">
                  qaamenterprises@outlook.com
                </a>
              </div>

              <div className="bg-blue-800 rounded-lg p-6 sm:p-8">
                <MapPin className="mx-auto mb-4 text-blue-200" size={48} />
                <h3 className="text-xl font-semibold mb-4">Office Location</h3>
                <p className="text-blue-100">
                  <br />
                  New Muslim Town 70-D<br />
                  Lahore, Pakistan
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
                <p>New Muslim Town 70-D</p>
                <p>Lahore, Pakistan</p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
              <div className="space-y-2 text-gray-300">
                <p>Phone: +92 30044 06438</p>
                <a href="mailto:qaamenterprises@outlook.com" className="block hover:text-white transition-colors">
                  Email: qaamenterprises@outlook.com
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>HDPE & PVC Geomembrane Installation</li>
                <li>Geotextile Installation</li>
                <li>Composite Membrane Installation</li>
                <li>Pond, Tank, Canal, Building & Tunnel Lining</li>

                <li>Internal/External Telecommunication</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              © {new Date().getFullYear()} QAAM Enterprises. All rights reserved. | Established 2009
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
