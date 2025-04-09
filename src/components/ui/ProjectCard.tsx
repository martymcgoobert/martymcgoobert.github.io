import React from 'react';
import { Project } from '../../types/project';
import AutoplayVideo from './AutoplayVideo';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  // Determine if it's the main project (Zenith)
  const isMainProject = project.title === 'Zenith';

  // We'll use this later if needed
  // const isMobile = window.innerWidth <= 768;

  if (isMainProject) {
    return (
      <div className="project-fullwidth" style={{
        width: '100%',
        height: 'auto',
        aspectRatio: '16/9',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '0px',
        marginBottom: '20px',
        display: 'block'
      }}>
        {project.mediaType === 'video' && project.media ? (
          <AutoplayVideo
            mp4Src={project.media.mp4 || ''}
            webmSrc={project.media.webm}
            className="project-media"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              background: '#000000'
            }}
          />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            background: '#000000'
          }}></div>
        )}
      </div>
    );
  } else {
    // For smaller projects (display side by side)
    return (
      <div className="project-smaller" style={{
        flex: '1 1 0',
        position: 'relative',
        background: '#000000',
        aspectRatio: '1/1',
        overflow: 'hidden',
        display: 'block'
      }}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            background: '#000000'
          }}></div>
        )}
      </div>
    );
  }
};

export default ProjectCard;
