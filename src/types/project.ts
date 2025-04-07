export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  role: string;
  tools: string;
  description: string;
  image?: string;
  media?: {
    mp4?: string;
    webm?: string;
  };
  mediaType?: 'video' | 'image';
}
