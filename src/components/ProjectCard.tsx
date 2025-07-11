
import { MapPin, Calendar, Building } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    client: string;
    location: string;
    timeline?: string;
    scope: string;
    image: string;
    status: string;
    tags?: string[];
  };
}


const ProjectCard = ({ project }: ProjectCardProps) => {
  const defaultTags = ['Geomembrane', 'Installation'];
  const tags = project.tags || defaultTags;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 sm:h-56 object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 right-4">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
            {project.status}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{project.title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Building size={16} className="mr-2 flex-shrink-0" />
            <span className="text-sm">{project.client}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin size={16} className="mr-2 flex-shrink-0" />
            <span className="text-sm">{project.location}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Calendar size={16} className="mr-2 flex-shrink-0" />
            <span className="text-sm">{project.timeline}</span>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-blue-900 mb-2">Project Scope:</h4>
          <p className="text-gray-700 text-sm line-clamp-3">{project.scope}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
