
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';

interface ProjectTimelineProps {
  projects: Array<{
    id: number;
    title: string;
    client: string;
    location: string;
    timeline?: string;
    year?: string;
    scope: string;
    status?: string;
    type: string;
  }>;
}

const ProjectTimeline = ({ projects }: ProjectTimelineProps) => {
 const sortedProjects = projects.sort((a, b) =>
  (b.year || '').localeCompare(a.year || '')
);


  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-900"></div>

      <div className="space-y-8">
        {sortedProjects.map((project, index) => (
          <motion.div
            key={project.id}
            className="relative flex items-start"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Timeline Dot */}
            <div className="absolute left-2 w-4 h-4 bg-blue-900 rounded-full border-4 border-white shadow-lg"></div>

            {/* Content */}
            <div className="ml-12 bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-wrap items-center gap-2 mb-3">
  {project.year && (
    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
      {project.year}
    </span>
  )}
  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
    {project.status}
  </span>
  <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
    {project.type}
  </span>
</div>


              <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="flex items-center text-gray-600">
                  <Building size={16} className="mr-2 flex-shrink-0" />
                  <span className="text-sm">{project.client}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin size={16} className="mr-2 flex-shrink-0" />
                  <span className="text-sm">{project.location}</span>
                </div>
              </div>

              <div className="flex items-center text-gray-600 mb-4">
                <Calendar size={16} className="mr-2 flex-shrink-0" />
                <span className="text-sm">{project.timeline}</span>
              </div>

              <p className="text-gray-700 text-sm">{project.scope}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectTimeline;
