import React from 'react';
import { Project } from '../../types/project';

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
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            width="100%"
            height="100%"
            controls
            className="project-media"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              background: '#D1E0D5'
            }}
          >
            {project.media.webm && <source src={project.media.webm} type="video/webm" />}
            {project.media.mp4 && <source src={project.media.mp4} type="video/mp4" />}
          </video>
        ) : (
          <div style={{
            width: '100%',
            height: '100%',
            background: '#D1E0D5'
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
        background: '#D1E0D5',
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
            background: '#D1E0D5'
          }}></div>
        )}
      </div>
    );
  }
};

export default ProjectCard;
