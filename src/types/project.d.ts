export interface MediaSources {
  mp4?: string;
  webm?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  role: string;
  tools: string;
  description: string;
  media?: MediaSources;
  image?: string;
  mediaType?: 'video' | 'image';
}

export type Projects = Project[];
